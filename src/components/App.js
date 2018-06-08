import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import Header from "./Header";
import Home from "./Home";
import CompanyInfo from "./CompanyInfo";
import CompanyReview from "./CompanyReview";
import {LoginForm, FindForm, RegistrationPage, RegistrationForm} from './Login';

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header/>
        <Container className="m-top-7">
          <Switch>
            <Route component={Home} exact path="/"/>
            <Route component={CompanyInfo} path="/company-info"/>
            <Route component={CompanyReview} path="/company-review"/>
            <Route component={LoginForm} path="/login"/>
            <Route component={FindForm} path="/find"/>
            <Route component={RegistrationPage} path="/register"/>
            <Route component={RegistrationForm} path="/registration"/>
          </Switch>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Root;