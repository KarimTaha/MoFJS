import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/app.css'

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

    // axios.get(Url,{
    //   headers: { 'Authorization': 'Basic '+btoa(name+":"+password) }
    // })
    axios.get('http://127.0.0.1:5000/logIn',{
    headers: {'auth': btoa(name+":"+password)}
  }).then((response) => {
    if(response.data === 401){
      document.getElementById("loaderBackground").style.visibility = "hidden";
      console.log("error");
    }
    else{
      console.log(response);
      localStorage.setItem('auth', btoa(name+":"+password));
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('username', name);
      this.setState(() => ({
        redirect: true
      }))
    }
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
      <div className="transferdiv transferdiv-login">
      </div>
      <div className="body">
        <div className="formcontainer">
          <div className="inside">
            <h3>تسجيل الدخول</h3>
          </div>
          <div className="inside" id="form">
            <form>
              <div className="formcontrols">

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
      <div className="loaderBackground" id="loaderBackground">
        <div className="loader"/>
      </div>
    </div>
  );
}
}


export default Login;
