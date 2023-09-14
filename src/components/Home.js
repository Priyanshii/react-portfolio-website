import React from 'react'
import styled from 'styled-components'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiHackerrank } from 'react-icons/si'
import { Link } from 'react-router-dom'
import Programmer from '../assets/images/programmer.jpg'
import Type from './Type'

const Home = () => {
  return (
    <>
      <HomeContainer id="home" name="home">
        <MainContent>
          <Introduction>
            <GreetingText>
              Hi There, I'm
            </GreetingText>
            <Name>
              Priyanshi Maheshwari
            </Name>
            <DesignationText>
              <Type />
            </DesignationText>
          </Introduction>
          <ProfileLinksMenu>
            <a href={"https://github.com/Priyanshii"} target="_blank">
              <AiFillGithub />
            </a>
            <a href={"https://www.linkedin.com/in/priyanshi-maheshwari-4730b3145"} target="_blank">
              <AiFillLinkedin />
            </a>
            <a href={"https://www.hackerrank.com/priyanshi_87?hr_r=1"} target="_blank">
              <SiHackerrank />
            </a>
          </ProfileLinksMenu>
        </MainContent>
        <ImageContainer>
          <img src={Programmer} alt='' />
        </ImageContainer>
      </HomeContainer>
    </>
  )
}

const HomeContainer = styled.div`
  margin-top: 4rem;
  padding: 6rem 6rem 2rem;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (max-width: 500px) {
    padding: 6rem 0rem 2rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const MainContent = styled.section`
  /* width: 50%; */
  flex: 1 1 auto;
  height: auto;
  margin-top: 40px; 
  padding-left: 40px;
  
  @media screen and (max-width: 600px) {
    flex: 0;
    margin-top: 0px;
    width: 100%;
    height: 300px;
  }
`

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 36px;
`

const GreetingText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  /* color: rgb(28, 54, 54); */
`

const Name = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  color: rgb(42, 151, 139);
`

const DesignationText = styled.span`
  font-size: 2rem;
  font-weight: 400;
  /* color: rgb(28, 54, 54); */
  color: #bb3459;
`

const ProfileLinksMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  a{
    color: rgb(42, 151, 139);
    font-size: 1.6rem;
    &:hover{
      color: #bb3459;
    }
  }

  a:last-child{
    font-size: 1.4rem;
  }
`

const ImageContainer = styled.div`
  width: 40%;
  /* width: 50%; */
  height: auto;
  margin-top: 20px;
  flex: 1 1 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: auto;
    max-width: 100%;
    max-height: 350px;
    object-fit: contain;
    border-radius: 50%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export default Home