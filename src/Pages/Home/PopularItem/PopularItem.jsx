
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularItem = () => {
    const [menu] = useMenu();
    const popular = menu.filter(items => items.category === "popular")
    return (
        <section>
            <SectionTitle subHeading={"Click it out"} heading={"from our menu"}></SectionTitle>
            <div className=" grid md:grid-cols-2">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}>

                    </MenuItem>)
                }
            </div>
            <div className=" flex mb-12 justify-center center-button">
                <button className=" btn btn-outline border-1 border-b-4 text-white">View full menu</button>
            </div>
        </section>
    );
};

export default PopularItem;