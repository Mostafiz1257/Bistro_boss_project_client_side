import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'
import img from '../../../assets/home/featured.jpg'

const Featured = () => {
    return ( 
        <div className="featured bg-fixed text-white py-8 my-20">
            <SectionTitle subHeading={"check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className=" md:flex justify-center items-center bg-black bg-opacity-30 md:px-36 py-16">
                <div>
                    <img src={img} alt="featured image" />
                </div>
                <div className=" md:ml-12">
                    <p >March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className=" btn btn-outline border-1 border-b-4 text-white">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;