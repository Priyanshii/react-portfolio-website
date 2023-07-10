import React from 'react'
import styled from 'styled-components';
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript } from 'react-icons/io';
import { FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiStyledcomponents, SiVisualstudiocode, SiPostman } from 'react-icons/si';
import { DiHtml5, DiCss3, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiBootstrap } from "react-icons/di";

const TechnicalSkills = () => {
  return (
    <>
      <SkillSetContainer>
        <SkillSetHeading>
          Skillset
        </SkillSetHeading>
        <SkillsMenu>
          <TechIcon>
            <CgCPlusPlus />
          </TechIcon>
          <TechIcon>
            <DiHtml5 />
          </TechIcon>
          <TechIcon>
            <DiCss3 />
          </TechIcon>
          <TechIcon>
            <IoLogoJavascript />
          </TechIcon>
          <TechIcon>
            <DiReact />
          </TechIcon>
          <TechIcon>
            <SiRedux />
          </TechIcon>
          <TechIcon>
            <FaNode />
          </TechIcon>
          <TechIcon>
            <DiMongodb />
          </TechIcon>
          <TechIcon>
            <DiPython />
          </TechIcon>
          <TechIcon>
            <SiTailwindcss />
          </TechIcon>
          <TechIcon>
            <SiStyledcomponents />
          </TechIcon>
          <TechIcon>
            <DiBootstrap />
          </TechIcon>
          <TechIcon>
            <DiGit />
          </TechIcon>
          <TechIcon>
            <SiVisualstudiocode />
          </TechIcon>
          <TechIcon>
            <SiPostman />
          </TechIcon>
        </SkillsMenu>
      </SkillSetContainer>
    </>
  )
}

const SkillSetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const SkillSetHeading = styled.span`
  font-size: 2.6rem;
  letter-spacing: 1px;
  font-weight: 500;
  color: rgb(42, 151, 139);
  margin-bottom: 2rem;
`

const SkillsMenu = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const TechIcon = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  padding: 30px 40px;
  color: rgb(28, 54, 54);

  svg{
    width: 50px;
    height: auto;
  }
`
const Text = styled.span`
  font-size: 1rem;
`

export default TechnicalSkills;
