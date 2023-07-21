import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard';

const projectList = [
  {
    img: require('../assets/images/contact_app.png'),
    demoLink: 'https://contact-management-app-phi.vercel.app/',
    githubLink: 'https://github.com/Priyanshii/Contact-Management-App',
  },
];

const ProjectsList = () => {
  return (
    <>
      <ProjectsContainer>
        <Heading>
          Projects
        </Heading>
        <ProjectsListContainer>
        {
          projectList.map((card, index) => {
            return(
              <ProjectCard {...card} key={index}/>
            )
          })
        }
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
  padding: 2rem 4rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`

export default ProjectsList