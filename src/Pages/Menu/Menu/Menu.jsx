import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import img from '../../../assets/menu/menu-bg.png'
import PopularItem from '../../Home/PopularItem/PopularItem';
const Menu = () => {
    console.log(img);
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={img} title={"Order Menu"}></Cover>
            <PopularItem></PopularItem>
            
        </div>
    );
};

export default Menu;