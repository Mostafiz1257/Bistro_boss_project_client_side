
import Banner from './Banner/Banner';
import Category from '../../Category/Category';
import PopularItem from '../PopularItem/PopularItem';
import ContractNumber from '../../../components/SectionTitle/ContractNumber/ContractNumber';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <ContractNumber></ContractNumber>
           <PopularItem></PopularItem>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;