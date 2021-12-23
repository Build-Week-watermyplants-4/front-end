import React from "react";
import AccountCreation from '../src/components/AccountCreation';
import Login from '../src/components/Login';
import './App.css';
import Home from "./components/Home";
import NavBar from "./components/Homepage";
import PlantForm from '../src/components/PlantForm';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
        <Router>
            <NavBar />
            <Routes>
                <Route path = '/login' element = {<Login />}>
                </Route>
                <Route path = '/' element = {<Home />}>
                </Route>
                <Route path = '/signup' element = {<AccountCreation />}>
                </Route>
                <Route path = '/plants' element = {<PlantForm />}>
                </Route>
            </Routes>
        </Router>
        </div>
    );
}

export default App;