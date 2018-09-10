import React from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import '../css/app.css'
import {getStageNumber} from '../js/utils'

var serverUrl = 'http://142.93.22.27:5000'
var testUrl = 'http://127.0.0.1:5000'

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

    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // axios.get(Url,{
    //   headers: { 'Authorization': 'Basic '+btoa(name+":"+password) }
    // })
    axios.get(serverUrl+'/logIn',{
    headers: {'auth': btoa(name+":"+password)}
  }).then((response) => {
    if(response.data === 401 || response.data === 400){
      document.getElementById("loaderBackground").style.visibility = "hidden";
      toast.error("Wrong username or password!",{
        autoClose: false
        });
    }
    else{
      console.log(response);
      localStorage.setItem('auth', btoa(name+":"+password));
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', name);
      localStorage.setItem('stageNumber', getStageNumber(name));
      this.setState(() => ({
        redirect: true
      }))
    }
  })
  .catch(error => {
    document.getElementById("loaderBackground").style.visibility = "hidden";
    toast.error("Error occurred!",{
      autoClose: false
      });
  });

}

render(){
  console.log(this.state.redirect);
  if (this.state.redirect === true) {
    return <Redirect to='/' />
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
