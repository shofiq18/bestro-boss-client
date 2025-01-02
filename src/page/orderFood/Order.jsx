import Cover from "../../shared/Cover";
import orderCover from "../../assets/assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodTab from "../../components/foodMap/FoodTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Order = () => {
    const categories = ['salad', 'Pizza', 'soup', 'Desserts', 'drinks' ];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category)
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
              <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <div mb-12
            
            >
                <Cover img={orderCover} title='order food'></Cover>

            </div>

            <div className=" text-center my-8">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <FoodTab items={salad}></FoodTab>
                </TabPanel>
                <TabPanel>
                <FoodTab items={pizza}></FoodTab>

                </TabPanel>
                <TabPanel>
                <FoodTab items={soup}></FoodTab>

                </TabPanel>
                <TabPanel>
                <FoodTab items={dessert}></FoodTab>

                </TabPanel>
                <TabPanel>
                <FoodTab items={drinks}></FoodTab>

                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;