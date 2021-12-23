import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: center;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
`
const StyledLogButton = styled.button`
    width: 20%;
    height: 4vh;
    background-color: white;
    border: 2px 2px black;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`

const StyledLogInput = styled.input`
    width: 75%;
    margin: 2%;
`

const initialLoginValues = {
    username: '',
    password: ''
}

// const initialLoginErrors = {
//     username: '',
//     password: ''
// } // Enable for validation

export default function Login() {

    const [ loginValues, setLoginValues ] = useState(initialLoginValues)
    // const [ loginErrors, setLoginErrors ] = useState(initialLoginErrors) // Enable for validation

    const inputChange = (name, value) => {
        setLoginValues({
            ...loginValues,
            [name]: value
        })
    }

    const onChange = event => {
        const { name, value } = event.target
        inputChange(name, value )
    }

    const submit = () => {
        const userDetails = {
            username: loginValues.username,
            password: loginValues.password,
        }

        console.log(userDetails);
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const createAccount = event => {
        event.preventDefault()
        console.log('cronge')
    }

    return (
        <form id='login'>
            <StyledLogDiv>
                <label> Username
                    <StyledLogInput
                        type='text'
                        name='username'
                        value={loginValues.username}
                        onChange={onChange}
                    />
                </label>

                <label> Password
                    <StyledLogInput
                        type='password'
                        name='password'
                        value={loginValues.password}
                        onChange={onChange}
                    />
                </label>

            </StyledLogDiv>

            {/* Validation Errors Render Here */}
            {/* <div id='errors'>
                <div>{formErrors.username}</div>
                <div>{formErrors.tel}</div>
                <div>{formErrors.password1}</div>
                <div>{formErrors.password2}</div>
                <div>{formErrors.tos}</div>
            </div> */}

            <StyledLogDiv>
                <StyledLogButton type='submit' onClick={onSubmit}> Sign In </StyledLogButton>
                <StyledLogButton onClick={createAccount}><StyledLink to="/signup" className="btn btn-primary">Create Account</StyledLink></StyledLogButton>
            </StyledLogDiv>
        </form>
    )
}