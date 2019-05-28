import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home';
import Default from './Components/Default';
import Navigation from '../src/Components/Navigation';
import ProductList from '../src/Components/ProductList';
import Details from './Components/Details';
import Cart from '../src/Components/Cart/Cart';
import Footer from '../src/Components/Footer';

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
          <Route component={Default} />
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
