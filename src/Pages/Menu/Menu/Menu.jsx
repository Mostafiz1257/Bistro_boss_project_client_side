import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import img from '../../../assets/menu/menu-bg.png'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg  from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets//menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(items => items.category === 'offered')
    const dessert = menu.filter(items => items.category === 'dessert')
    const pizza = menu.filter(items => items.category === 'pizza')
    const salad = menu.filter(items => items.category === 'salad')
    const soup = menu.filter(items => items.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={img} title={"Order Menu"}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"Dessert"} coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"Dessert"} coverImg={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"Dessert"} coverImg={soupImg}></MenuCategory>

        </div>


    );
};

export default Menu;