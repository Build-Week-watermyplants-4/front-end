import React from "react";
// import AccountCreation from '../src/components/AccountCreation';
import Login from '../src/components/Login';
import './App.css';
import Home from "./components/Home";
import NavBar from "./components/Homepage";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
        <Router>
            <Routes>
                <NavBar />
                <Home />
                <Login/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;