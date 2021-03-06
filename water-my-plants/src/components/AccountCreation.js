import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledACDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: center;
    width: 51%;
    margin-left: auto;
    margin-right: auto;
`

const StyledACDiv2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
`

const StyledACInput = styled.input`
    margin: 2%;
`

const StyledACInput2 = styled.input`
    margin: 2%;
`

const StyledACInput3 = styled.input`
    margin: 2%;
`

const StyledACInput4 = styled.input`
    margin: 2%;
`

const StyledACCheckbox = styled.input`
    margin-top: 8%;
`

const initialFormValues = {
    username:'',
    tel:'',
    password:'',
    password2:'',
    tos:false,
    notif:true
}

const StyledACButton = styled.button`
    width: 100%;
    height: 4vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 2px 2px black;
    margin-top: 5%;
`

// const initialFormErrors = {
//     username:'',
//     tel:'',
//     password:'',
//     password2:'',
//     tos:false,
// } Enable for validation

const extraStuff = {
    notif: false,
    password2: '',
    tos: false
}

const initialUser = []; // Enable for posting User somewhere

export default function AccountCreation() {

    const [ user, setUser ] = useState(initialUser); // Enable for posting User somewhere
    const [ formValues, setFormValues ] = useState(initialFormValues);
    // const [ formErrors, setFormErrors ] = useState(initialFormErrors); // Enable for validation

    const getNewUser = () => {
        axios.get('https://build-week-water-plants.herokuapp.com/api/users')
            .then(resp => {
                console.log(resp.data)
                setUser([resp.data, ...user]);
            }).catch(error => console.error(error.response.data.message))}

    const postNewUser = newUser => {
        axios.post('https://build-week-water-plants.herokuapp.com/api/users', newUser)
            .then(resp => {
                console.log(resp.data)
                setUser([resp.data, ...user]);
            }).catch(error => console.error(error.response))
            .finally(() => setFormValues(initialFormValues))
    }

    // const postNewUser2 = () => {
    //     axios({
    //         method: 'post',
    //         url: 'https://build-week-water-plants.herokuapp.com/api/users/signup',
    //         data: {
    //             user_name: formValues.user_name,
    //             tel: formValues.tel,
    //             user_password: formValues.user_password,
    //             tos: formValues.tos,
    //         }
    //       }).then(resp => {
    //         console.log(resp.data)
    //         setUser([resp.data, ...user]);
    //     }).catch(error => console.error(error.response.data))
    //         .finally(() => setFormValues(initialFormValues))
    // }

    const inputChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked: value;
        inputChange(name, valueToUse )
    }

    const submit = () => {
        const newUser = {
            username: formValues.username,
            tel: formValues.tel,
            password: formValues.password,
        }

        console.log(newUser);
        getNewUser(newUser);
        postNewUser(newUser);
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form id='accountCreation' onSubmit={onSubmit} >
            <StyledACDiv>
                <label> Username
                    <StyledACInput
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange= {onChange}
                    />
                </label>

                <label> Mobile Phone Number
                    <StyledACInput2
                        type='text'
                        name='tel'
                        value={formValues.tel}
                        onChange= {onChange}
                        placeholder="Format: 123-456-7890"
                    />
                </label>

                <label> Password
                    <StyledACInput3
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange= {onChange}
                    />
                </label>

                <label> Confirm Password
                    <StyledACInput4
                        type='password'
                        name='password2'
                        value={formValues.password2}
                        onChange= {onChange}
                    />
                </label>
            </StyledACDiv>

            <StyledACDiv2>
                <label> Please Agree to our Terms of Service
                    <StyledACCheckbox
                        type='checkbox'
                        name='tos'
                        value={extraStuff.tos}
                        onChange= {onChange}
                    />
                </label>
            </StyledACDiv2>

            <StyledACDiv2>
                <label> I would like to receive text updates
                    <StyledACCheckbox
                        type='checkbox'
                        name='tos'
                        value={extraStuff.notif}
                        onChange= {onChange}
                    />
                </label>
            </StyledACDiv2>

            {/* Validation Errors Render Here */}
            {/* <div id='errors'>
                <div>{formErrors.username}</div>
                <div>{formErrors.tel}</div>
                <div>{formErrors.password1}</div>
                <div>{formErrors.password2}</div>
                <div>{formErrors.tos}</div>
            </div> */}

            <StyledACDiv>
                <StyledACButton> Create Account </StyledACButton>
            </StyledACDiv>
        </form>
    )

}