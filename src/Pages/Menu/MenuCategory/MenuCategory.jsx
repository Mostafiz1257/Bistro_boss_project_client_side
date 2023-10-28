import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className=" my-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className=" grid md:grid-cols-2 my-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item}>

                    </MenuItem>)
                }
            </div>
            <Link to ={`/order/${title}`}>
                <button className=" btn btn-outline border-1 border-b-4 text-white">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;