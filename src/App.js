import React from 'react'
import Login from './components/Login'
import logo from './burger-logo.jpg';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }
    this.usercheck = this.usercheck.bind(this)
    this.setUserName = this.setUserName.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  usercheck(){
    if(this.state.username ==='abc' && this.state.password==='123'){
      this.setState({
        isLoggedIn : true
      })
    }else{
      alert('Username and Password doesn\'t match')
    }
  }
  
  setUserName(userName){
    this.setState({
      username : userName
    })
  }
  setPassword(userPassword){
    this.setState({
      password : userPassword
    })
  }
  render(){
    let currComponent;
    if(this.state.isLoggedIn){
      currComponent = <h1> You are successfully Logged in </h1>
    }else{
      currComponent=  <Login userName={this.setUserName} userPassword={this.setPassword} checkUser={this.usercheck}/>
    }
  return (
    <div className="App">
      <img src={logo} alt="Delicious Burger" id="logo" />
      <hr></hr>
     {currComponent}
    </div>
  );
  }
}

export default App;
