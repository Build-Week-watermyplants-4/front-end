import React from "react";
import { Link} from 'react-router-dom';




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
      </div>
    </nav>


    {/* <Switch>
      <Route path="/log-in">
        < />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch> */}


  </div>
)

    
}

