import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center mx-auto md:w-3/12 my-8'>
            <p className='text-yellow-400 italic pb-3 '>------ {subHeading}------</p>
            <h3 className='text-3xl border-y py-3 uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;