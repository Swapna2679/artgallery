import logo from './logo.svg';
import './App.css';
import Signup from "./components/signup"
import Login from "./components/login"
function App() {
  return (
    <div className="App">
      <ul>
        <li> <Login/></li>
        <li><Signup/></li>
      </ul>
      

       
    </div>
  );
}

export default App;