import React from 'react'
import About from '../components/About'
import Home from '../components/Home'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <>
      <MainContainer id="landingPage">
        <Home />
        <About />
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export default LandingPage