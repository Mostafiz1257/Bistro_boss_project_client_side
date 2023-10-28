
const FoodCard = ({ item }) => {
    const { image, recipe, price, name } = item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className=" absolute right-4 bg-black text-white px-3 top-4 ">${price}</p>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end flex flex-col items-center">
                    <button className="btn btn-outline border-1 border-b-4 text-white ">add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;