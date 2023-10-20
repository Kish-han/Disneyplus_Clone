import Navbar from './Navbar'
import styled from 'styled-components'
import axios from '../axios'
import React, { useEffect, useState } from 'react'


const Details = () => {

  const [ id, setId] = useState("")
  return (
    <>
      <Navbar />
      <Container>
        <img src='' alt="" />
      </Container>
    </>

  )
}

export default Details

const Container = styled.div`
  background-image: url();
  color: red;
  
`