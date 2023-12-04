import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
// import './Checkout.css'
const CheckoutForm = ({ cart, price }) => {

    const stripe = useStripe();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const elements = useElements();
    const [cardError, setCardError] = useState(' ')
    const [clientSecret, setClientSecret] = useState();
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log("client secret is:", res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError("")
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.name || "anonymous"
                    },
                },
            },
        );
        if (confirmationError) {
            console.log(confirmationError);
        }
        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                Transation_id: paymentIntent.id,
                date: new Date(),
                price,
                Quantity: cart.length,
                cardItems: cart.map(item => item._id),
                MenuItems: cart.map(item => item.name),
                OrderStatus:"service pending"
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.result.insertedId) {
                        Swal.fire("Order Confirmed!");
                    }
                    // console.log(res.data);
                })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay Now
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {transactionId && <p className=" text-green-500 mt-8">The transaction id : {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;