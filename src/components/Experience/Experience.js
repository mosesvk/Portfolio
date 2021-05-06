/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import css from '../../images/css-3.svg'
import react from '../../images/react.svg'
import html from '../../images/html-5.svg'
import javascript from '../../images/jscript.svg'
import nodejs from '../../images/node.svg'
import sql from '../../images/sql-server.svg'
import git from '../../images/git.svg'
import sass from '../../images/sass.svg'
import Divider from '@material-ui/core/Divider';
// import {SideLinkedin, SideGithub } from '../Sidebar/SidebarElements'
import {
  FaLinkedin,
  FaGithub,
  FaYoutube
} from 'react-icons/fa'
import {
  BsArrow90DegDown
} from 'react-icons/bs'
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
import logoResume from '../../images/resume.jpg'
import './Experience.scss'


const Skills = () => {
  return (
    <>
      <ExperienceContainer id="experience" lightBg="true">
        <ExperienceHeader>
          <ExperienceHeaderText>EXPERIENCE</ExperienceHeaderText>
          <ExperienceP>View my LinkedIn & Github Profile for more information</ExperienceP>
          <Divider variant="middle"/>
          <SocialWrap>
            <SocialLink
            href="https://www.linkedin.com/in/mosesvk/"
            target="_blank"
            ><FaLinkedin iconDark="true"/></SocialLink>
            <SocialLink
            href="https://github.com/mosesvk"
            target="_blank"
            ><FaGithub iconDark="true"/></SocialLink>
            <SocialLink
            href="https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA"
            target="_blank"
            ><FaYoutube style={{fontSize: '3rem'}} iconDark="true"/></SocialLink>
          </SocialWrap>
        </ExperienceHeader>
        <div className="experience-wrap">
          <div className='link-wrap'>
              <a href="https://docs.google.com/document/d/1sKVvvqiWqA_lYPkbfFr4cIbze5EvfHacN-iO_w04ZB0/edit" target="_blank"><h3><BsArrow90DegDown/> RESUME LINK</h3></a>
              <a href="https://docs.google.com/document/d/1sKVvvqiWqA_lYPkbfFr4cIbze5EvfHacN-iO_w04ZB0/edit" target="_blank">
                <img src={logoResume} alt="" className="resume-img"/>
              </a>
          </div>
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
              <Skill>                
                <SkillImg src={sass}/>
                SASS
              </Skill>            
            </SkillWrap>
          </SkillContainer>
        </div>
      </ExperienceContainer>
    </>
  )
}

export default Skills
