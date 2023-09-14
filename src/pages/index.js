import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Resume from './Resume';
import Sidebar from '../components/Sidebar'
import LandingPage from './LandingPage';
import ExperiencePage from './ExperiencePage';
import styled from 'styled-components';

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MainContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`

export default Pages;
