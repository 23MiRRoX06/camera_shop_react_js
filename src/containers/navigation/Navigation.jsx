import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import Catalog from '../pages/catalog/Catalog';
import Cart from '../pages/cart/cart_main/Cart';
import CartCheckout from '../pages/cart/cart_checkout/CartCheckout';
import CartSuccess from '../pages/cart/cart_success/CartSuccess'
import Item from '../pages/item/Item';

const Navigation = () => {
    return (
        <Switch>
            <Route exact path='/catalog' component={Catalog} ></Route>
            <Route exact path='/cart/checkout' component={CartCheckout} ></Route>
            <Route exact path='/cart/success' component={CartSuccess} ></Route>
            <Route exact path='/cart' component={Cart} ></Route>
            <Route exact path='/item' component={Item} ></Route>
            <Route exact path='/' component={Home} ></Route>
        </Switch>
    );
};

export default Navigation;