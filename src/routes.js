import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsContainer from "./Components/Presentational/ProductsContainer";
import Products from "./Components/HOC/Products";
import DataFetcher from "./Components/RenderProps/DataFetcher";
import ProductsRender from "./Components/RenderProps/ProductsRender";
// import Axios from "axios";
// import PropTypes from "./Components/PropTypes/ParentPropType";
// import ProductsDisplay from './Components/Presentational/ProductsDisplay';

export default (
  <Switch>
    <Route exact path="/" component={ProductsContainer} />
    <Route path="/hoc" component={Products} />
    <Route
      path="/render-props"
      render={() => {
        return (
          <DataFetcher
            url="/api/products"
            renderProducts={(data) => {
              return <ProductsRender data={data} />;
            }}
          />
        )
      }}
    />
  </Switch>
);
