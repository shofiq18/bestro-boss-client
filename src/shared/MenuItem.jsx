import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image,  price } = item;
    return (
        <div>
            <div className='md:flex gap-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px] mb-4 ' src={image} alt="" />
            <div>
                <p className='text-xl uppercase'>{name}-----------------------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
        
        </div>
      
    );
};

export default MenuItem;