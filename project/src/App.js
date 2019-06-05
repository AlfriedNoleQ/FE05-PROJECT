import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Default from './Components/Default';
import Navigation from '../src/Components/Navigation';
import Products from '../src/Components/Products/Products';
import Details from './Components/Details/Details';
import Cart from '../src/Components/Cart/Cart';
import Footer from '../src/Components/Footer';
import SignIn from '../src/Components/SignIn';
import SignUp from '../src/Components/SignUp';
import Checkout from '../src/Components/Checkout/Checkout';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';

export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <React.Fragment>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/details/:id" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/signin"component={SignIn} />
            <Route path="/signup"component={SignUp} />
            <Route path="/checkout" component={Checkout} />
            <Route component={Default} />
          </Switch>
          <Footer/>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App;
