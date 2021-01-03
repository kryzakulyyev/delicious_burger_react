import React from 'react'
import Login from './components/Login'
import logo from './burger-logo.jpg';
import './App.css';



class App extends React.Component {
  render(){

  return (
    <div className="App">
      <img src={logo} alt="Delicious Burger" id="logo" />
      <hr></hr>
      <Login />
    </div>
  );
  }
}

export default App;
