import React from 'react';
import MenuItem from '../../shared/MenuItem';
import Cover from '../../shared/Cover';
import { Link, useParams } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    const {category} = useParams();
    console.log(category)
    return (

        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='px-3 grid md:grid-cols-2 gap-12 my-12'>

                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link  to={`/order/${title}`}><div className='text-center'>
                <button className="border-b-2 border-black uppercase mb-8  hover:bg-black text-black hover:text-white px-3 py-2 rounded-lg">order your favorite food</button>

            </div></Link>

        </div>
    );
};

export default MenuCategory;