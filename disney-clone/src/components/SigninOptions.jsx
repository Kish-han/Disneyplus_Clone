import React, { useState } from 'react'
import styled from 'styled-components'
import SignupOptions from './SignupOptions';

const SigninOptions = () => {

    const [signUp, setSignUp] = useState(false);


    return (
        <>
            {!signUp ? (
                <Container>
                    <Wrap>
                        <h1>Sign In</h1>
                        <input type="text" placeholder='Email Or PhoneNumber' />
                        <input type="password" placeholder='Password' />
                        <Button>Login</Button>
                        <p>Or</p>
                        <GoogleBtn>Continue with google</GoogleBtn>
                        <Signup>New to Disneyplus ? <span onClick={() => setSignUp(true)}>Sign up now</span></Signup>
                    </Wrap>
                </Container>

            ) : (
                <SignupOptions />
            )}
        </>
    )
}

export default SigninOptions

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
const GoogleBtn = styled(Button)`
    font-size: 14px;
    
`
const Signup = styled.div`
    margin-top: 20px;
    text-align: left;
    color: #848282;
    letter-spacing: .5px;
    span{
        color:#fff;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 12px;
        cursor:pointer;

        &:hover{
            text-decoration: underline;
            text-underline-offset: 3px;
        }
    }
`