import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featureImg from '../../../assets/assets/home/featured.jpg'
import "./Featured.css"

const Featured = () => {
    return (
        <div className='featured-item bg-fixed mb-12 '>
            <SectionTitle
             heading={"Featured Item"}
             subHeading={"check it out "}>
            </SectionTitle>
            <div className='md:flex  py-8 md:px-24 '>
                <div>
                    <img  src={featureImg} alt="" />
                </div>
                <div className=' px-3  md:ml-12  space-y-3 text-black '>
                    <h4>March 20, 2023</h4>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam neque provident quaerat et impedit dolore, consectetur odit porro ex
                         non unde architecto, iste, quos hic reprehenderit. Dolor quae quaerat magnam, dolorem ducimus tenetur vitae voluptate aliquam culpa et aperiam
                          sint cupiditate maxime, modi sequi minima ex nostrum id. Dolores, fuga!</p>
                          <button className="border-b-2 hover:bg-black text-white px-3 py-2 rounded-lg">order now</button>

                    
                </div>
            </div>
        </div>
    );
};

export default Featured;