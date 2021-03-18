import React from 'react'
import {
  SidebarContainer,
  Icon, 
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideLinkedin,
  SideGithub
} from './SidebarElements'


const Sidebar = (props) => {
  const {toggle, isOpen} = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="portfolio" onClick={toggle} >PORTFOLIO</SidebarLink>
          <SidebarLink to="about" onClick={toggle} >ABOUT</SidebarLink>
          <SidebarLink to="contact" onClick={toggle} >CONTACT</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideLinkedin onClick={toggle}/>
          <SideGithub onClick={toggle}/>
          {/* <SidebarRoute>
            <FaLinkedin />
            <FaGithubSquare />
          </SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
