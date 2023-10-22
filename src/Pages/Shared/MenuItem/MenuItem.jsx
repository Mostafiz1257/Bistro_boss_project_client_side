
const MenuItem = ({ item }) => {
    const { image, recipe, price, name } = item
    return (
        <div className="flex space-x-3 md:p-4 hover:rounded-lg hover:shadow-xl hover:transition duration-200 ">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px]" src={image} alt="menu item picture" />
            <div>
                <h3 className=" uppercase">{name}----------</h3>
                <p>{recipe}---------</p>
            </div>
            <div>
                <p className=" text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;