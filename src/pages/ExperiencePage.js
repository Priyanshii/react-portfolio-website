import React, { useEffect } from 'react'
import ProjectsList from '../components/ProjectsList'
import WorkExperience from '../components/WorkExperience'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const ExperiencePage = () => {
  const location = useLocation();
    
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[location])

  return (
    <>
      <ExperienceContainer>
        <WorkExperience />
        <ProjectsList />
      </ExperienceContainer>
    </>
  )
}

const ExperienceContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export default ExperiencePage;
