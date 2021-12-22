import React from "react";
import AccountCreation from '../src/components/AccountCreation';
import Login from '../src/components/Login';
import './App.css';
import Home from "./components/Home";
//import NavBar from "./components/Homepage";

function App() {
  return (
     <div className="App">
       <header className="App-header">
       </header>
    <Home />
    <NavBar />
      <Login/>
    </div>
  );
}

export default App;
