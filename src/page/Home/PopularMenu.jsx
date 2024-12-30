import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../../shared/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            console.log(popularItem)
            setMenu(popularItem)
        })
    }, [])
    return (
        <div>
            <SectionTitle
             heading={"from our menu"}
             subHeading={"check it out "}>
            </SectionTitle>
            <div className='px-3 grid md:grid-cols-2 gap-12 my-12'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default PopularMenu;