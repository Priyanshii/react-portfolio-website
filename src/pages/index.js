import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import Navbar from '../components/Navbar'
import Resume from './Resume';
import Sidebar from '../components/Sidebar'
import LandingPage from './LandingPage';
import ExperiencePage from './ExperiencePage';

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='relative'>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<ExperiencePage /> } />
        <Route path="/resume" element={<Resume /> } />
      </Routes>
    </div>
  )
}

export default Pages;
