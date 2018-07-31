import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Transfers from './Components/Transfers';
import TransferDetails from './Components/TransferDetails';
import Login from './Components/Login'

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      loggedIn: false
    }
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path="/TransferDetails" component={TransferDetails} />
          <Route exact path="/" component={Transfers} />
          <Route exact path="/Login" component={Login}/>
        </div>
      </BrowserRouter>
    )
  }

}


export default App;
