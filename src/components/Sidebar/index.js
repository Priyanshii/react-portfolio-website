import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkScroll to="home" onClick={toggle}>
            Home
          </SidebarLinkScroll>
          <SidebarLinkScroll to="about" onClick={toggle}>
            About
          </SidebarLinkScroll>
          <SidebarLinkRouter to="/projects" onClick={toggle}>
            Projects
          </SidebarLinkRouter>
          <SidebarLinkRouter to="/resume" onClick={toggle}>
            Resume
          </SidebarLinkRouter>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: ${({ isOpen}) => ( isOpen ?  '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`

const CloseIcon = styled(FaTimes)`
  color: #000000;
  font-size: 2rem;
`

const SidebarWrapper = styled.div`  
  color: #000;
`

const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 60px);
 text-align: center;

 @media screen and (max-width: 480px) {
  grid-template-rows: repeat(6, 60px);
  
 }
`

const SidebarLinkScroll = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover{
    color: blue;
    transition: 0.2s ease-in-out;
  }
`

const SidebarLinkRouter = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover{
    color: blue;
    transition: 0.2s ease-in-out;
  }
`

export default Sidebar;
