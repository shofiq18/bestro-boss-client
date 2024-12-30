import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className='my-20 '>
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"what our client say "}>

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(rev => <SwiperSlide
                        key={rev._id}
                    >
                        <div className='flex flex-col items-center space-y-4 px-20 text-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rev.rating}
                                readOnly
                            />
                            <p>{rev.details}</p>
                            <h3 className='text-2xl text-yellow-500 '>{rev.name}</h3>
                        </div>


                    </SwiperSlide>)
                }

            </Swiper>


        </div>
    );
};

export default Testimonial;