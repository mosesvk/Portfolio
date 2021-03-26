import React from 'react'
import {
  AboutContainer,
  AboutHeader,
  AboutHeaderText,
  AboutWrap,
  AboutText,
  ImgWrap,
  Img
} from './AboutElements'
import imgFam from '../../images/family-1.JPG'

const About = () => {


  return (
    <>
      <AboutContainer id="about">
        <AboutHeader>
          <AboutHeaderText>WHO IS MOSES?</AboutHeaderText>
        </AboutHeader>
        <AboutWrap>
          <AboutText>
            <p>Born in California, Raised in Utah. I love being with my family. I enjoy playing piano and watching Marvel movies. </p>
          </AboutText>
          <ImgWrap>
            <Img src={imgFam}/>
            {/* <Img /> */}
          </ImgWrap>
        </AboutWrap>
      </AboutContainer>
    </>
  )
}

export default About;