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
            to="skills"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            SKILLS
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
            <NavBtnLink to="contact">Contact Me</NavBtnLink>
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideLinkedin onClick={toggle} />
          <SideGithub onClick={toggle} />
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
