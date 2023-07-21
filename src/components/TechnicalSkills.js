import React from 'react'
import styled from 'styled-components';
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript } from 'react-icons/io';
import { FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiStyledcomponents, SiVisualstudiocode, SiPostman } from 'react-icons/si';
import { DiHtml5, DiCss3, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiBootstrap } from "react-icons/di";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const TechnicalSkills = () => {
  return (
    <>
      <SkillSetContainer>
        <SkillSetHeading>
          Skillset
        </SkillSetHeading>
        <SkillsMenu>
          <TechIcon data-tooltip-id="cplusplus" data-tooltip-content="C++" data-tooltip-place="bottom">
            <ReactTooltipStyled id="cplusplus" />
            <CgCPlusPlus />
          </TechIcon>
          <TechIcon data-tooltip-id="html" data-tooltip-content="HTML" data-tooltip-place="bottom">
            <ReactTooltipStyled id="html" />
            <DiHtml5 />
          </TechIcon>
          <TechIcon data-tooltip-id="css" data-tooltip-content="CSS" data-tooltip-place="bottom">
            <ReactTooltipStyled id="css" />
            <DiCss3 />
          </TechIcon>
          <TechIcon data-tooltip-id="javascript" data-tooltip-content="JavaScript" data-tooltip-place="bottom">
            <ReactTooltipStyled id="javascript" />
            <IoLogoJavascript />
          </TechIcon>
          <TechIcon data-tooltip-id="react" data-tooltip-content="React.JS" data-tooltip-place="bottom">
            <ReactTooltipStyled id="react" />
            <DiReact />
          </TechIcon>
          <TechIcon data-tooltip-id="redux" data-tooltip-content="Redux" data-tooltip-place="bottom">
            <ReactTooltipStyled id="redux" />
            <SiRedux />
          </TechIcon>
          <TechIcon data-tooltip-id="node" data-tooltip-content="Node.JS" data-tooltip-place="bottom">
            <ReactTooltipStyled id="node" />
            <FaNode />
          </TechIcon>
          <TechIcon data-tooltip-id="mongodb" data-tooltip-content="MongoDB" data-tooltip-place="bottom">
            <ReactTooltipStyled id="mongodb" />
            <DiMongodb />
          </TechIcon>
          <TechIcon data-tooltip-id="python" data-tooltip-content="Python" data-tooltip-place="bottom">
            <ReactTooltipStyled id="python" />
            <DiPython />
          </TechIcon>
          <TechIcon data-tooltip-id="tailwindcss" data-tooltip-content="TailwindCSS" data-tooltip-place="bottom">
            <ReactTooltipStyled id="tailwindcss" />
            <SiTailwindcss />
          </TechIcon>
          <TechIcon data-tooltip-id="styledcomponents" data-tooltip-content="Styled Components" data-tooltip-place="bottom">
            <ReactTooltipStyled id="styledcomponents" />
            <SiStyledcomponents />
          </TechIcon>
          <TechIcon data-tooltip-id="bootstrap" data-tooltip-content="Bootstrap" data-tooltip-place="bottom">
            <ReactTooltipStyled id="bootstrap" />
            <DiBootstrap />
          </TechIcon>
          <TechIcon data-tooltip-id="git" data-tooltip-content="Git" data-tooltip-place="bottom">
            <ReactTooltipStyled id="git" />
            <DiGit />
          </TechIcon>
          <TechIcon data-tooltip-id="visualStudio" data-tooltip-content="VS Code" data-tooltip-place="bottom">
            <ReactTooltipStyled id="visualStudio" />
            <SiVisualstudiocode />
          </TechIcon>
          <TechIcon data-tooltip-id="postman" data-tooltip-content="Postman" data-tooltip-place="bottom">
            <ReactTooltipStyled id="postman" />
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
const ReactTooltipStyled = styled(Tooltip)`
  background-color: white;
  color: rgb(28, 54, 54);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export default TechnicalSkills;
