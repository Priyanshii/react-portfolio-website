import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink as LinkR, useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import * as Scroll from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const [activeLink, setActiveLink] = useState("");

  const handleScrollLink = async(selector) => {
    await navigate("/");
    setActiveLink(selector);
    scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -100,
      spy: true
    });
  }

  const handleRouterLink = () => {
    setActiveLink("")
    toggle();
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkScroll $active={activeLink === "home" ? true :  false} onClick={() => {handleScrollLink("home")}}>
            Home
          </SidebarLinkScroll>
          <SidebarLinkScroll $active={activeLink === "about" ? true :  false} onClick={() => {handleScrollLink("about")}}>
            About
          </SidebarLinkScroll>
          <SidebarLinkRouter to="/experience" onClick={() => {handleRouterLink()}}>
            Experience
          </SidebarLinkRouter>
          <SidebarLinkRouter to="/resume" onClick={() => {handleRouterLink()}}>
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

const SidebarLinkScroll = styled.button`
  color: ${props => props.$active ? '#bb3459' : 'rgb(28,54,54)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  border: none;
  background-color: transparent;
  padding: 0 1rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover{
    color: #bb3459;
    transition: 0.2s ease-in-out;
  }
`

const SidebarLinkRouter = styled(LinkR)`
  color: rgb(28, 54, 54);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover{
    color: #bb3459;
    transition: 0.2s ease-in-out;
  }
  
  &.active{
    color: #bb3459;
    transition: 0.2s ease-in-out;
  }
`

export default Sidebar;
