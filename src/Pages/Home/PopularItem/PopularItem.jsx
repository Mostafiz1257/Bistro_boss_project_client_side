import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const PopularItem = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenu(popularItem)
             
            })
    }, [])
    return (
        <section>
            <SectionTitle subHeading={"Click it out"} heading={"from our menu"}></SectionTitle>
            <div className=" grid md:grid-cols-2">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}>

                    </MenuItem>)
                }
            </div>
            <button  className=" btn btn-outline border-1 border-b-4 text-white">View full menu</button>
        </section>
    );
};

export default PopularItem;