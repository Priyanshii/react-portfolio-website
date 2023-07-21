import React from 'react'
import styled from 'styled-components';

const ProjectCard = ({img, demoLink, githubLink }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src={img} alt="" />
        </ImageContainer>
        <LinkContainer>
          <a href={demoLink} target='_blank'>Demo Link</a>
          <a href={githubLink} target='_blank'>Github Link</a>
        </LinkContainer>
      </CardContainer>
    </>
  )
}

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const ImageContainer = styled.div`
  img{
    width: 400px;
    height: auto;
    object-fit: contain;
  }
`

const LinkContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  a{
    background-color: transparent;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 4px;
    padding: 5px 10px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: rgb(28, 54, 54);
    
    &:hover{
      border: 2px solid rgb(28, 54, 54);
      background-color: rgb(28, 54, 54);
      color: white;
    }
  }
`

export default ProjectCard;
