import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            <Wrap>
                <FirstImg>
                    <img src="/images/cta-logo-one.svg" alt="" />
                </FirstImg>
                <Button>
                    GET ALL THERE
                </Button>
                <Description>
                    <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                </Description>
                <LastImg>
                    <img src="/images/cta-logo-two.png" alt="" />
                </LastImg>
            </Wrap>
        </Container>

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

const FirstImg = styled.div`
    width: 90%;
    margin-bottom: 10px;
`

const Button = styled.div`
    width: 100%;
    background-color: blue;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
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