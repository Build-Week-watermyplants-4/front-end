import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin: 5px;  
  border: 2px solid black;
  color: black;
  text-decoration: none;
  text-shadow: .5px .5px 2px grey;
  padding: 3px;
`
const StyledH1 = styled.h1`
    text-shadow: .5px .5px 2px grey;
    color: black;
`
const StyledNavBar = styled.nav`
  display: flex;
  align-items: baseline;
  border-bottom: 3px solid black;
  justify-content: space-between;
  margin: 3px;
`


export default function NavBar() {

    return (
        <div className='Home'>
            <StyledNavBar>
                <StyledH1 className='home-header'>Water My Plant</StyledH1>
                <div className='nav-links'>
                    <StyledLink className ='Home-btn' to = '/'>
                        Home
                    </StyledLink>
                    <StyledLink className ='LogIn-btn' to = '/Login'>
                        Log In
                    </StyledLink>
                    <StyledLink className ='SignUp-btn' to = '/Signup'>
                        Sign Up
                    </StyledLink>
                    <StyledLink className ='plants-btn' to = '/plants'>
                        Plants
                    </StyledLink>
                </div>
            </StyledNavBar>
        </div>
    )


}