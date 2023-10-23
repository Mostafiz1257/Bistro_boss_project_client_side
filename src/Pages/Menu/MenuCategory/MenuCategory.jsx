import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div className=" my-8">
             { title && <Cover img={coverImg} title={title}></Cover>}
             <div className=" grid md:grid-cols-2 my-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item}>

                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;