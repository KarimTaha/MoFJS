import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Transfers from './Components/Transfers';
import TransferDetails from './Components/TransferDetails';
import Login from './Components/Login'
import Approved from './Components/Approved';

import './App.css';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path="/TransferDetails" component={TransferDetails} />
          <Route path="/" component={Transfers} />
          <Route path="/Login" component={Login}/>
          <Route exact path="/Approved" component={Approved}/>
        </div>
      </BrowserRouter>
    )
  }

}


export default App;
