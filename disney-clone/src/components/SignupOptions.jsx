import React from 'react'
import styled from 'styled-components'

const SignupOptions = () => {
    return (
        <Container>
            <Wrap>
                <h1>Sign Up</h1>
                <input type="text" placeholder='Email Or PhoneNumber' />
                <input type="password" placeholder='Password' />
                <Button>SignUp</Button>
            </Wrap>
        </Container>
    )
}

export default SignupOptions

const Container = styled.div`
    height: 30em;
    padding: 15px 25px;
    text-align: center;
    background-color: rgba(1, 11, 1, 0.6);
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 16em;
    margin-top: 40%;
    h1{
        margin-bottom: 10px;
        text-align: left;
    }
    input{
        height: 3em;
        border: none;
        outline: none;
        border-radius: 5px;
        margin: 10px 0px;
        padding: 0px 10px;
        font-size: 15px;
    }
`

const Button = styled.button`
    margin-top: 10px;
    margin-bottom: 10px;
    height: 3em;
    font-size: 16px;
    border-radius: 5px;
    background-color : #0004f8;
    color: white;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 1px;
    cursor: pointer;
`