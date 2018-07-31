import React from 'react';
import { Link , Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import '../css/app.css'

var props;
class Login extends React.Component{

  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(){
    localStorage.clear();
    this.props.history.push('/login');
    this.forceUpdate();
  }

  render(){
    var loggedIn = localStorage.getItem('loggedIn');
    // console.log(loggedIn);

    return(
      <div className="container">
        {loggedIn?
          <div className="blackBar">
            <span className="userName">Logged in as {localStorage.getItem('username')}</span>
            <a className="noStyle" onClick={this.logOut}><span className="userName">Log out</span></a>
          </div>
          :<div className="blackBar">
          </div>}

          <div className="header">
            <nav className="nav">
              <div className="child one">
                <div className="circle">
                  <img src="img/mof.png" alt="logo" className="imgLogo"/>
                </div>
              </div>

              <div className="child two">
                <h1>نظام المناقلات المالية</h1>
              </div>

              <div className="child three">
                <img src="img/Zayed.jpg" alt="logo" className="zayedLogo"/>
              </div>
            </nav>
          </div>

        </div>
      )
    }
  }


  export default withRouter(Login);
