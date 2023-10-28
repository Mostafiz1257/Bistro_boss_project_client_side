import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import image from '../../../assets/menu/salad-bg.jpg'
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
            <Cover img={image} title={"Menu"}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>

        </div>


    );
};

export default Menu;