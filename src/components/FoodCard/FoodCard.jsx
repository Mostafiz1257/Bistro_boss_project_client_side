import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { _id, image, recipe, price, name } = item;
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire('Item add to card successfully !')
                    }
                })

        }
        else {
            Swal.fire({
                title: 'Please login first for add to card',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, log in!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className=" absolute right-4 bg-black text-white px-3 top-4 ">${price}</p>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end flex flex-col items-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-1 border-b-4 text-black ">add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;