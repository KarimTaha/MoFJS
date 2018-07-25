import React from 'react';
import { Link , Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css'

let Url = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/applications';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      redirect: false
    }
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(){
    document.getElementById("loaderBackground").style.visibility = "visible";

    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    axios.get(Url,{
      headers: { 'Authorization': 'Basic '+btoa(name+":"+password) }
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('auth', btoa(name+":"+password));
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', name);
      this.setState(() => ({
        redirect: true
      }))
    })
    .catch(function (error) {
      document.getElementById("loaderBackground").style.visibility = "hidden";
      console.log(error);
      console.log(localStorage.getItem('auth'));
    });

  }

  render(){
    console.log(this.state.redirect);
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }
    return(
      <div className="container">
        <div className="body">
          <div className="formcontainer">
            <div className="inside">
              <h3>Sign in</h3>
            </div>
            <div className="inside" id="form">
              <div className="input">
                <input id="username" type="text" placeholder="Username"/>
              </div>
              <div className="input">
                <input id="password" type="password" placeholder="Password"/>
              </div>
              <div className="input">
                <input type="button" id="signInBtn" value="Sign in" onClick={this.handleSignIn}/>
              </div>
            </div>
          </div>
        </div>
        <div className="loaderBackground" id="loaderBackground">
          <div className="loader"/>
        </div>
      </div>
    );
  }
}


export default Login;
