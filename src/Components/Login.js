// Login is handled as follows:
// User writes Hyperion username and password in textboxes, these values are then added in header to request sent to REST api
// The username and password are added in header in base64
// If response is success, the credentials are stored in localStorage, as well as the user's name and stage


import React from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import '../css/app.css'
import {getStageNumber} from '../js/utils'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      redirect: false
    }
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  // Function that gets called when user clicks on sign-in
  handleSignIn(){
    // Show the loading animation
    document.getElementById("loaderBackground").style.visibility = "visible";

    // Get the username and password values from textboxes
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send request to /api/login which redirects to Hyperion all applications
    axios.get('/api/login',{
      headers: {'Authorization': 'Basic '+btoa(name+":"+password)}
    }).then((response) => {
    //Handle if response is bad request or not found
    if(response.data === 401 || response.data === 400){
      // Hide the loading animation
      document.getElementById("loaderBackground").style.visibility = "hidden";
      // Show error toast Message
      toast.error("Wrong username or password!",{
          autoClose: false
          });
      }
      else{
        // Save the data to localStorage
        console.log(response);
        localStorage.setItem('auth', btoa(name+":"+password));
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('username', name);
        localStorage.setItem('stageNumber', getStageNumber(name));
        // Set redirect variable to true, so that the next time the render() method is called, the page redirects to homepage not login
        this.setState(() => ({
          redirect: true
        }))
      }
    })
    .catch(error => {
      // If error is detected, show toast Message
      console.log(error.response)
      console.log("Error in login")
      document.getElementById("loaderBackground").style.visibility = "hidden";
      toast.error("Error occurred!",{
        autoClose: false
        });
    });

}

render(){
  console.log(this.state.redirect);
  // If user is logged in, redirect to home (Transfers) page
  if (this.state.redirect === true) {
    return <Redirect to='/' />
  }
  if(localStorage.getItem('loggedIn')){
    this.props.history.push('/');
  }
  return(
    <div className="container-fluid">
      <div className="transferdiv transferdiv-login row">
      </div>
      <div className="row">
        <div className="col">
        </div>
        <div className="col-sm-10 col-lg-6">
          <div className="formcontainer">
            <div className="formTitle bold">
              <h3>تسجيل الدخول</h3>
            </div>

            <div id="form">
              <form>
                <div>

                  <div className="input">
                    <input type="text" id="username" placeholder="إسم المستخدم" className="rightInput"/>
                  </div>

                  <div className="input">
                    <input id="password" type="password" placeholder="كلمة السر" className="rightInput"/>
                  </div>

                  <div className="input">
                    <input type="button" id="signInBtn" value="دخول" onClick={this.handleSignIn}/>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
        </div>
      </div>
    </div>
  );
}
}


export default Login;
