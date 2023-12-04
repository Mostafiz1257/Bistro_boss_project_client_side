import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GET_WAY_PK)
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=>sum+item.price,0)
    const price = parseInt(total)
    console.log(price);
    return (
        <div className=" px-4" >
            <SectionTitle heading={"Payment"} subHeading={"complete your payment"}></SectionTitle>
            
            <div className=" md:w-1/4 mx-auto mt-[80px]">
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;