import Cover from "../../Shared/Cover";
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    console.log(category);
    const drinks = menu.filter(items => items.category === 'drinks')
    const dessert = menu.filter(items => items.category === 'dessert')
    const pizza = menu.filter(items => items.category === 'pizza')
    const salad = menu.filter(items => items.category === 'salad')
    const soup = menu.filter(items => items.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro | Order food</title>
            </Helmet>
            <Cover img={orderCoverImg} title={"Order Now"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={salad}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel >
                    <OrderTab item={dessert}></OrderTab>
                </TabPanel>
                <TabPanel  >
                    <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;