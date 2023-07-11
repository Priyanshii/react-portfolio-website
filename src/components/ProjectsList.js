import React from 'react'
import styled from 'styled-components'

const ProjectsList = () => {
  return (
    <>
      <ProjectsContainer>
        <Heading>
          Projects
        </Heading>
        <ProjectsListContainer>

        </ProjectsListContainer>
      </ProjectsContainer>
    </>
  )
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-top: 2rem;
`

const Heading = styled.span`
  font-size: 2.6rem;
  letter-spacing: 0.8px;
  font-weight: 500;
  color: rgb(42, 151, 139);
`

const ProjectsListContainer = styled.div`
`

export default ProjectsList