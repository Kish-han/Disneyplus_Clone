import React, { useState } from 'react'
import styled from 'styled-components'

const Navbar = () => {

    return (
        <Container>
            <Logo>
                <img src="/images/logo.svg" alt="Logo" />
            </Logo>
            <NavMenu>
                <Link>
                    <img src="/images/home-icon.svg" alt="" />
                    <p>HOME</p>
                </Link>
                <Link>
                    <img src="/images/search-icon.svg" alt="" />
                    <p>SEARCH</p>
                </Link>
                <Link>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <p>WATCHLIST</p>
                </Link>
                <Link>
                    <img src="/images/original-icon.svg" alt="" />
                    <p>ORIGINALS</p>
                </Link>
                <Link>
                    <img src="/images/movie-icon.svg" alt="" />
                    <p>MOVIES</p>
                </Link>
                <Link>
                    <img src="/images/series-icon.svg" alt="" />
                    <p>SERIES</p>
                </Link>
            </NavMenu>
            <Profile>
                <img src="https://imgs.search.brave.com/M5ytj7a9K0w4JXlzrruFpLU1tUUgua2eyNm609y0E28/rs:fit:1080:1122:1/g:ce/aHR0cHM6Ly9iZXN0/cHJvZmlsZXBpY3R1/cmVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNC9D/b29sLVByb2ZpbGUt/UGljdHVyZS5qcGc" alt="" />
            </Profile>
        </Container>
    )
}

export default Navbar


const Container = styled.div`
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

const NavMenu = styled.nav`
    display: flex;
    @media (max-width: 800px){
        display: none;
    }

`
const Link = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
    flex: 1;
    cursor: pointer;
    img{
        height: 22px;
        margin-right: 5px;
    }
    p{
        color: white;
        letter-spacing: 1.5px;
        font-size: 14px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        position: relative;
        
        &::after{
            position: absolute;
            left: 0;
            bottom: -6px;
            content: "";
            background-color: white;
            border-radius: 0px 0px 4px 4px;
            height: 2px;
            width: 100%;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
    }

    &:hover{
        p::after{
            transform: scaleX(1);
        }
    }
    
`

const Profile = styled.div`
    height: 50px;
    margin-right: 15px;   
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img{
        height: 95%;
        border-radius: 50px;    
    }
`

