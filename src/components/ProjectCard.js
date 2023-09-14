import React from 'react'
import styled from 'styled-components';

const ProjectCard = ({img, demoLink, githubLink, name }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src={img} alt="" />
        </ImageContainer>
        <NameContainer>{name}</NameContainer>
        <LinkContainer>
          <a href={demoLink} target='_blank'>Demo Link</a>
          <a href={githubLink} target='_blank'>Github Link</a>
        </LinkContainer>
      </CardContainer>
    </>
  )
}

const CardContainer = styled.div`
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const ImageContainer = styled.div`
  img{
    width: 100%;
    height: auto;
    object-fit: contain;
    border-bottom: 1px solid #e1dcdc;
  }
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: medium;
  margin-top: 20px;
  color: rgb(28, 54, 54);
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
    color: rgb(42, 151, 139);
    
    &:hover{
      border: 2px solid rgb(28, 54, 54);
      background-color: rgb(28, 54, 54);
      color: white;
    }
  }
`

export default ProjectCard;
