import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";



export default function NavBar() {
    
return (
    <div className='Home'>
    <nav>
      <h1 className='home-header'>Water My Plant</h1>
      <div className='nav-links'>
            <Link className ='Home-btn' to = '/'>
                  Home
            </Link>
            <Link className ='LogIn-btn' to = '/Login'>
                  Log In
            </Link>
            <Link className ='SignUp-btn' to = '/Signup'>
                  Sign Up
            </Link>
            <Link className ='plants-btn' to = '/plants'>
                  plants
            </Link>
      </div>
    </nav>
  </div>
)

    
}
