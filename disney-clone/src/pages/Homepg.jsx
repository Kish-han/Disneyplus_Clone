import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider'
import Navbar from '../components/Navbar'
import ProductionHover from '../components/ProductionHover'


const Homepg = () => {
  return (
    <Container>
      <Navbar />
      <ImgSlider />
      <ProductionHover />
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