import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Components/Navbar';
import Transfers from './Components/Transfers';
import TransferDetails from './Components/TransferDetails';
import Login from './Components/Login'
import Approved from './Components/Approved';

import './App.css';

class App extends Component {

  componentDidMount(){
    document.title = "المناقلات المالية";
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path="/TransferDetails" component={TransferDetails} />
          <Route exact path="/" component={Transfers} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Approved" component={Approved}/>
          {/* If no data is in state, just display loader */}
          <div className="loaderBackground" id="loaderBackground">
            <div className="loader" id="loader">
            </div>
          </div>
          <ToastContainer />
        </div>
      </BrowserRouter>
    )
  }

}


export default App;
