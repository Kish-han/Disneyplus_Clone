import React, { useState } from 'react'
import styled from 'styled-components'
import SigninOptions from './SigninOptions';
const Login = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <>
            <NavContainer>
                {!signIn ? (
                    <>
                        <Logo>
                            <img src="/images/logo.svg" alt="Logo" />
                        </Logo>
                        <LoginBtn onClick={() => setSignIn(true)}>
                            LOGIN
                        </LoginBtn>
                    </>

                ) : (
                    <Logo>
                        <img src="/images/logo.svg" alt="Logo" />
                    </Logo>
                )}
            </NavContainer>
            <Container>
                <Wrap>
                    {signIn ? (
                        <SigninOptions />
                    ) : (
                        <>
                            <FirstImg>
                                <img src="/images/cta-logo-one.svg" alt="" />
                            </FirstImg>
                            <Button onClick={() => setSignIn(true)}>
                                GET ALL THERE
                            </Button>
                            <Description>
                                <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                            </Description>
                            <LastImg>
                                <img src="/images/cta-logo-two.png" alt="" />
                            </LastImg>
                        </>
                    )}
                </Wrap>
            </Container>
        </>
    )
}

export default Login

const Container = styled.div`
    height: 91vh;
    background: url('/images/login-background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrap = styled.div`
    max-width: 760px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

const NavContainer = styled.nav`
    background-color: black;
    height: 9vh;
    width: 100%;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Logo = styled.div`
    height: 60px;
    margin-left: 10px;
    margin-right: 20px;
    padding: 5px 0px;
    img{
        height: 100%;        
    }
`

const LoginBtn = styled.div`
    color: white;
    border: 1.5px solid white;
    margin-right: 10px;
    padding: 5px 15px;
    font-size: 18px;
    letter-spacing: 1.5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
        transition: all 0.3s ease-in-out;
    }
`

const FirstImg = styled.div`
    width: 90%;
    margin-bottom: 10px;
`

const Button = styled.div`
    width: 100%;
    background-color: #0004f8;
    color: white;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 2px;
    font-weight: 500;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
`

const Description = styled.div`
    margin-top: 20px;
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 20px;
`

const LastImg = styled.div`
    width: 100%;
    margin-top: 20px;
    img{
        width: 100%;
    }
`