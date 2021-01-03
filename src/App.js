import Login from './components/Login'
import logo from './burger-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Delicious Burger" id="logo" />
      <hr></hr>
      <Login />

    </div>
  );
}

export default App;
