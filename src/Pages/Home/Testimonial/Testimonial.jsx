import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BiBookmarkAltMinus } from 'react-icons/bi';
import '@smastrom/react-rating/style.css'

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className=" my-16">
            <SectionTitle subHeading={"what our client says"} heading={"TESTIMONIALS"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {

                
                    
                     reviews.map(review => <SwiperSlide key={review._id}>
                       <div  className=" flex flex-col items-center my-4  ">
                        <BiBookmarkAltMinus className="md:text-4xl text-orange-400"></BiBookmarkAltMinus>
                       <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly
                        />
                        <p> {review.details}</p>
                        <p className=" text-2xl text-orange-400">{review.name}</p>
                       </div>
                    </SwiperSlide>)
                   
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;