import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Default from './components/Default';
import Navigation from '../src/components/Navigation';
import ProductList from '../src/components/Products/ProductList';
import Details from './components/Details/Details';
import Cart from '../src/components/Cart/Cart';
import Footer from '../src/components/Footer';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/signin"component={SignIn} />
          <Route path="/signup"component={SignUp} />
          <Route component={Default} />
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
