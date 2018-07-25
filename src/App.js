import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Transfers from './Components/Transfers';
import TransferDetails from './Components/TransferDetails';

import './css/home.css';
import './App.css';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/TransferDetails" component={TransferDetails} />
          <Route exact path="/" component={Transfers} />
        </div>
      </BrowserRouter>
    )
  }


}

function Header(){
  return(
    <div className="container">
      <div className="blackBar">
        <span className="userName">Logged in as sralyateem</span>
        <a href="#" className="noStyle"><span className="userName">Log out</span></a>
      </div>

      <div className="header">
        <nav className="nav">


          <div className="child one">
            <div className="circle">
              <img src="img/mof uae.jpg" alt="logo" className="imgLogo"/>
            </div>
          </div>

          <div className="child two">
            <h1>Budget Transfers</h1>
          </div>

          <div className="child three">

          </div>
        </nav>
      </div>

    </div>
  );
}

export default App;
