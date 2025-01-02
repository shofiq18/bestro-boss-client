import React from 'react';
import Card from '../foodCard/Card';

const FoodTab = ({items}) => {
    return (
        <div className='md: grid grid-cols-3 gap-4 my-12'>
            {
                items.map(item => <Card key={item._id} item={item} ></Card>)
            }
        </div>
    );
};

export default FoodTab;