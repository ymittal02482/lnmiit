import React from "react";
import { Switch, Route } from "react-router-dom";
import addresses from "../Components/MyOrders/MyAddresses/Addresses";
import ordersPage from "../Components/MyOrders/Orders";
import Home from "../Pages/Home";
import Product from "../Pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/account/orders" component={ordersPage} />
      <Route path="/account/addresses" component={addresses} />
      <Route path="/productCate/:id" exact component={Product} />
    </Switch>
  );
};

export default Routes;
