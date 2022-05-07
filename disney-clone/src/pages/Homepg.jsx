import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider'
import Navbar from '../components/Navbar'
import ProductionHover from '../components/ProductionHover'
import Row from '../components/Row'
import requests from '../Requests'

const Homepg = () => {
  return (
    <Container>
      <Navbar />
      <ImgSlider />
      <ProductionHover />
      <Row
        title="New To Disney"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </Container>
  )
}

export default Homepg

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/images/home-background.png');
  background-position: center;
  background-size: cover;
  overflow-x: hidden;

`