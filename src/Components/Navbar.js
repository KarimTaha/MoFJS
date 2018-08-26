import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/app.css'

class Login extends React.Component{

  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  // Handle logOut by clearing storage and redirecting to login page
  logOut(){
    localStorage.clear();
    this.props.history.push('/login');
    // Force rerender
    this.forceUpdate();
  }

  render(){
    var loggedIn = localStorage.getItem('loggedIn');

    return(
      <div className="container">
        {loggedIn?
          <div className="blackBar">
            <span className="glyphicon glyphicon-log-out"></span>
            <a className="noStyle" onClick={this.logOut}><span className="userName"> خروج</span></a>
            <span className="userName">{localStorage.getItem('username')} تم الدخول كـ</span>

          </div>
          :<div className="blackBar">
          </div>}

          <div className="header">
            <nav className="nav">
              <div className="child one">
                <div className="circle">
                  <img src="img/Logo.jpg" alt="logo" className="imgLogo"/>
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
