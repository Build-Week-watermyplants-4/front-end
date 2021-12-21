import React from "react";
import styled from "styled-components";
import { Link, Route, Switch } from 'react-router-dom';
import App from "../App";


const StyledHeader = styled.h1`

`

export default function Home() {
    
return (
    <div className='Home'>
    <nav>
      <h1 className='home-header'>Water My Plant</h1>
      <div className='nav-links'>
        {/* <Link to="/">Home</Link>
        <Link to="/log-in">Log In</Link> */}
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

