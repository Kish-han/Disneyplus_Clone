import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Container>
            <Logo>
                <img src="/images/logo.svg" alt="Logo" />
            </Logo>
            <LoggedIn>
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
            </LoggedIn>
        </Container>
    )
}

export default Navbar


const Container = styled.div`
    background-color: black;
    height: 8vh;
    width: 100vw;
    display: flex;
    align-items: center;
`
const Logo = styled.div`
    height: 50px;
    padding: 10px 10px;
    margin-left: 10px;
    margin-right: 20px;
    img{
        height: 100%;
    }
`

const LoggedIn = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const NavMenu = styled.nav`
    display: flex;
`
const Link = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
    flex: 1;
    img{
        height: 22px;
        margin-right: 5px;
    }
    p{
        color: white;
        letter-spacing: 1.5px;
        font-size: 14px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`

const Profile = styled.div`
    height: 50px;
    margin-right: 30px;   
    img{
        height: 95%;
        border-radius: 50px;    
    }
`