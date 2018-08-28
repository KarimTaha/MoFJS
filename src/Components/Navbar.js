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
    <div className="container-fluid">
      {loggedIn?
        <div className="blackBar row">
          <div className="col">
            <a className="noStyle" onClick={this.logOut}>
          <span className="glyphicon glyphicon-log-out"></span>
          <span className="userName"> خروج</span></a>
          <span className="userName">{localStorage.getItem('username')} تم الدخول كـ</span>
        </div>
        </div>
        :<div className="blackBar row">
        </div>}

        <div className="header row">
          <div className="col-3">
            <img src="img/Logo.jpg" alt="logo" className="imgLogo"/>
          </div>

          <div className="col-6 headerTitle bold">
            نظام المناقلات المالية
          </div>

          <div className="col-3 zayedLogoDiv">
            <img src="img/Zayed.jpg" alt="logo" className="zayedLogo"/>
          </div>
        </div>

      </div>
    )
  }
}


export default withRouter(Login);
