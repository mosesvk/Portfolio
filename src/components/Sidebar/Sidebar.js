import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideLinkedin,
  SideGithub,
} from "./SidebarElements";
import {
  NavBtnLink
} from "../Navbar/navbarElements"

const Sidebar = (props) => {
  const { toggle, isOpen } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            PORTFOLIO
          </SidebarLink>
          <SidebarLink
            to="experience"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            EXPERIENCE
          </SidebarLink>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            ABOUT
          </SidebarLink>
          <SidebarLink>
            <NavBtnLink to="contact" sidebar="true">GET IN TOUCH</NavBtnLink>
          </SidebarLink>
          <SidebarLink>
            <SideLinkedin onClick={toggle} />
          </SidebarLink>
          <SidebarLink>
            <SideGithub onClick={toggle} />
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SideLinkedin onClick={toggle} />
          <SideGithub onClick={toggle} /> */}
          {/* <SidebarRoute>
            <FaLinkedin />
            <FaGithubSquare />
          </SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
