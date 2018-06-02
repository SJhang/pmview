import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import StoreInfo from "./StoreInfo";
import StoreReview from "./StoreReview";
// custom components
import Test from './Test';

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Test />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={StoreInfo} path="/store-info" />
          <Route component={StoreReview} path="/store-review" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Root;