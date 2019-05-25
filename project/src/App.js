import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

function App() {
  return (
    <Home/>
  );
}

export default App;
