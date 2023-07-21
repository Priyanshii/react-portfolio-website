import React from 'react'
import styled from 'styled-components'
import TechnicalSkills from './TechnicalSkills'
import Profile from '../assets/images/profile.jpg'

const About = () => {
  return (
    <>
      <AboutContainer id="about" name="about">
        <IntroductionContainer>
          <ImageContainer>
            <img src={Profile} alt="" />
          </ImageContainer>
          <ContentContainer>
            <IntroTitle>
              About Me
            </IntroTitle>
            <Content>
              Experienced front-end developer specializing in React.js, with 1 year of
              dedicated experience in building dynamic and scalable web applications.
              Possesses a deep understanding of Javascript core concepts, React
              principles and best practices, including component-based architecture
              and state management. Strong problem-solving skills and a passion for
              creating intuitive user interfaces that enhance user experiences.
            </Content>
            <ExtraInfo>
              Email :   
              <EmailID onClick={() => {window.location.href ='mailto:priyanshimaheshwari2015@gmail.com';}}>
              {` priyanshimaheshwari2015@gmail.com`}
              </EmailID>
            </ExtraInfo>
          </ContentContainer>
        </IntroductionContainer>
        <TechnicalSkills />
      </AboutContainer>
    </>
  )
}

const AboutContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 2rem 6rem;
`

const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: auto;
  margin-bottom: 4rem;
`

const ImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  img{
    height: auto;
    max-width: 100%;
    max-height: 350px;
    object-fit: contain;
    border-radius: 50%;
  }
`

const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  margin-left: auto;
`

const IntroTitle = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  color: rgb(42, 151, 139);
  margin-bottom: 1rem;
`

const Content = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.20px;
  margin-bottom: 1.2rem;
  word-spacing: 3px;
  color: rgb(28, 54, 54);
`

const ExtraInfo = styled.span`
  color: rgb(28, 54, 54);
`

const EmailID = styled.span`
  cursor: pointer;

  &:hover{
    border-bottom: 1px solid rgb(28, 54, 54);
  }
`

export default About