import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import AddProduct from "./AddProduct";
import App from "../App";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/addProduct" component={AddProduct} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
