import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route ,withRouter} from 'react-router-dom';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';

import $ from 'jquery';

import './App.css';
import './Vendor.js';
import Partners from "./pages/partners/partners";
import Drivers from "./pages/drivers/drivers";
import Aboutus from './pages/company/aboutus';
import Contact1 from './pages/contacts/contact1';
import SignIn1 from './pages/account/signin/signin1';
import SignIn2 from './pages/account/signin/signin2';
import ForgotPassword from './pages/account/forgotpassword';
import SignUp from './pages/account/signup';
import Faq from './pages/utilities/faq';
import Maintenance from './pages/utilities/maintenance';
import ComingSoon from './pages/utilities/comingsoon';
import PageNotFound from './pages/utilities/404';
import PrivacyPolicy from './pages/utilities/privacypolicy';
import TermCondition from './pages/utilities/termcondition';
import  {getProducts} from './actions';
import { connect } from 'react-redux';
import Index from './pages/Index';
import Scrolltop from './layout/back-to-top';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  UNSAFE_componentWillMount()
  {
    this.props.getProducts();
  }
  getUrl(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/coming-soon' ? true : `/${pathArray[1]}` === '/maintenance' ? true : `/${pathArray[1]}` === '/page-not-found' ? true : false;
  }
  setHeader(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/' ? true :`/${pathArray[1]}` === '/drivers' ? true : `/${pathArray[1]}` === '/partners' ? true : `/${pathArray[1]}` === '/index4' ? true : `/${pathArray[1]}` === '/index5' ? true : `/${pathArray[1]}` === '/index9' ? true  : false;
 
  }
  render() {
    const { location } = this.props;
    return (
      <Fragment>
         {
             this.getUrl(location.pathname) ?
                <Switch>
                    <Route path="/coming-soon" component={ComingSoon} />
                    <Route path="/maintenance" component={Maintenance} />
                    <Route path="/page-not-found" component={PageNotFound} />
                </Switch>
              :
        <div className="page-wrapper">
          {this.setHeader(location.pathname) ? null : <Header />}
          <Switch>
            <Route exact path="/" component={Index} />
            {/* Partners Pages */}
              <Route exact path="/partners" component={Partners} />
            {/* Drivers Pages */}
              <Route exact path="/drivers" component={Drivers} />
            {/* Company Pages */}
            <Route path="/about-us" component={Aboutus} />
            {/* Contact Pages */}
            <Route path="/contact-us" component={Contact1} />
            {/* Account Pages */}
            <Route path="/sign-in" component={SignIn1} />
            <Route path="/sign-in-1" component={SignIn2} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            {/* Utilitie Pages */}
            <Route path="/faq" component={Faq} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/term-condition" component={TermCondition} />
          </Switch>
          <Footer />
          <Scrolltop />
        </div>
         }
      </Fragment>
    );
  }
}

const AppMapStateToProps = state => {
  return {
    products: state.data.products
  };
};

const AppMapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    }
  };
};


export default connect(AppMapStateToProps,AppMapDispatchToProps)(withRouter(App))

