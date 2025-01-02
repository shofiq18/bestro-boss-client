import React from 'react';
import Cover from '../../shared/Cover';
import menuImg from '../../assets/assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
import useMenu from '../../hooks/useMenu';
import dessertImg from '../../assets/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/assets/menu/salad-bg.jpg'
import soupImg from '../../assets/assets/menu/soup-bg.jpg'

const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
   

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | our menu</title>
            </Helmet>
            {/* Main menu */}
            <Cover img={menuImg} title='Our menu '></Cover>

            {/* offered menu */}
            <SectionTitle
             heading={"Today's  offer"}
             subHeading={"Don't miss "}>
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert menu */}
            <MenuCategory items={dessert} title='Desserts' img={dessertImg}></MenuCategory>
            {/* Pizza menu */}
            <MenuCategory items={pizza} title='Pizza' img={pizzaImg}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>
            {/* soup menu */}
            <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>



            


        </div>
    );
};

export default OurMenu;