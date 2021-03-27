import React from 'react'
import css from '../../images/css-3.svg'
import react from '../../images/react.svg'
import html from '../../images/html-5.svg'
import javascript from '../../images/jscript.svg'
import nodejs from '../../images/node.svg'
import github from '../../images/github.svg'
import git from '../../images/git.svg'
import {
  ExperienceContainer,
  ExperienceHeader,
  ExperienceHeaderText,
  SkillContainer,
  SkillWrap,
  Skill
} from './ExperienceElements.js'


const Skills = () => {
  return (
    <>
      <ExperienceContainer id="experience">
        <ExperienceHeader>
          <ExperienceHeaderText>EXPERIENCE</ExperienceHeaderText>
        </ExperienceHeader>
          <SkillContainer >
            <SkillWrap>
              <Skill src={react}/>
              <Skill src={css}/>
              <Skill src={html}/>
              <Skill src={javascript}/>
              <Skill src={nodejs}/>
              <Skill src={github}/>
              <Skill src={git}/>
            </SkillWrap>
          </SkillContainer>
      </ExperienceContainer>
    </>
  )
}

export default Skills
