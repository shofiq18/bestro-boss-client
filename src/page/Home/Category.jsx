// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';               // Default Swiper styles
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../../assets/assets/home/slide1.jpg"
import slide2 from "../../assets/assets/home/slide2.jpg"
import slide3 from "../../assets/assets/home/slide3.jpg"
import slide4 from "../../assets/assets/home/slide4.jpg"
import slide5 from "../../assets/assets/home/slide5.jpg"
import SectionTitle from '../../components/SectionTitle';





const Category = () => {
    return (
      <section className='my-12'>
        <SectionTitle 
         heading={"order online"}
         subHeading={"from 11:00 am to 10:00 pm "}>
           
        </SectionTitle>
    
        
          <Swiper
        slidesPerView={4}                // Number of slides visible at once
        spaceBetween={30}                // Space between slides
        // centeredSlides={true}            // Centers active slide
        pagination={{
          clickable: true,            
        }}
         modules={[Pagination]}
        className="mySwiper"
       
      >
       
        
       
      
        <SwiperSlide>
            <img src={slide1} alt="" />
            <p className='text-sm md:text-xl  uppercase text-center -mt-12 md:-mt-16 text-gray-100'>salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <p className='text-sm md:text-xl  uppercase text-center -mt-12 md:-mt-16 text-gray-100'>pizza</p>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <p className='text-sm md:text-xl  uppercase text-center -mt-12 md:-mt-16 text-gray-100'>soups</p>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <p className='text-sm md:text-xl  uppercase text-center -mt-12 md:-mt-16 text-gray-100'>desserts</p>

        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <p className=' text-sm  md:text-xl  uppercase text-center -mt-12 md:-mt-16 text-gray-100'>salad</p>

        </SwiperSlide>
        
       
        
      </Swiper>
      </section>
        
       
        
      
    );
};

export default Category;