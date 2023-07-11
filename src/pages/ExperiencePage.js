import React from 'react'
import ProjectsList from '../components/ProjectsList'
import WorkExperience from '../components/WorkExperience'
import styled from 'styled-components'

const ExperiencePage = () => {
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
