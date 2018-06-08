import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import Header from "./Header";
import Home from "./Home";
import CompanyInfo from "./CompanyInfo";
import CompanyReview from "./CompanyReview";
import Test from './Test';
import {Login, Registration} from './Login';

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header/>
        <Test/>

        <Container style={{
          marginTop: 7 + 'em'
        }}>
          <Switch>
            <Route component={Home} exact path="/"/>
            <Route component={CompanyInfo} path="/company-info"/>
            <Route component={CompanyReview} path="/company-review"/>
            <Route component={Login} path="/login"/>
            <Route component={Registration} path="/register"/>
          </Switch>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Root;