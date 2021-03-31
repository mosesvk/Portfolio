import React from 'react'
import css from '../../images/css-3.svg'
import react from '../../images/react.svg'
import html from '../../images/html-5.svg'
import javascript from '../../images/jscript.svg'
import nodejs from '../../images/node.svg'
import sql from '../../images/sql-server.svg'
import git from '../../images/git.svg'
import Divider from '@material-ui/core/Divider';
// import {SideLinkedin, SideGithub } from '../Sidebar/SidebarElements'
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'
import {
  SocialWrap,
  SocialLink
} from '../Portfolio/portfolioElements'
import {
  ExperienceContainer,
  ExperienceHeader,
  ExperienceHeaderText,
  ExperienceP,
  SkillContainer,
  SkillWrap,
  SkillImg,
  Skill
} from './ExperienceElements.js'


const Skills = () => {
  return (
    <>
      <ExperienceContainer id="experience" lightBg="true">
        <ExperienceHeader>
          <ExperienceHeaderText>EXPERIENCE</ExperienceHeaderText>
          <ExperienceP>View my LinkedIn & Github Profile for more information</ExperienceP>
          <Divider variant="middle"/>
          <SocialWrap>
            <SocialLink><FaLinkedin iconDark="true"/></SocialLink>
            <SocialLink><FaGithub iconDark="true"/></SocialLink>
          </SocialWrap>
        </ExperienceHeader>
        <SkillContainer lightBg="true">
          <SkillWrap>
            <Skill>
              <SkillImg src={react}/>
              React
            </Skill>
            <Skill>                
              <SkillImg src={css}/>
              CSS
            </Skill>
            <Skill>                
              <SkillImg src={html}/>
              HTML
            </Skill>
            <Skill>                
              <SkillImg src={javascript}/>
              JavaScript
            </Skill>
            <Skill>                
              <SkillImg src={nodejs}/>
              NodeJS
            </Skill>
            <Skill>                
              <SkillImg src={git}/>
              Git
            </Skill>            
            <Skill>                
              <SkillImg src={sql}/>
              Postgre
            </Skill>            
          </SkillWrap>
        </SkillContainer>
      </ExperienceContainer>
    </>
  )
}

export default Skills
