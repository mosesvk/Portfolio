import React from 'react'
import {
  FaFacebookSquare,
  FaYoutube
} from 'react-icons/fa';
import {
  SocialWrap,
  SocialLink
} from '../Portfolio/portfolioElements'
import {
  AboutContainer,
  AboutHeader,
  AboutHeaderText,
  AboutHeaderP,
  AboutWrap,
  AboutText,
  ImgWrap,
  Img
} from './AboutElements'
import Divider from '@material-ui/core/Divider';
import imgFam from '../../images/family-1.JPG'

const About = () => {


  return (
    <>
      <AboutContainer id="about">
        <AboutHeader>
          <AboutHeaderText>WHO IS MOSES?</AboutHeaderText>
          <AboutHeaderP>Kaumatule  (cow - mah - too - leh)</AboutHeaderP>
          <Divider variant="middle"/>
          <SocialWrap>
            <SocialLink
              href="https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube style={{fontSize:"3rem"}}/>
            </SocialLink>
            <SocialLink 
              href="https://www.facebook.com/profile.php?id=100004199235959"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookSquare />
            </SocialLink>
          </SocialWrap>
        </AboutHeader>
        <AboutWrap>
          <AboutText>
            <p>Born in California, Raised in Utah.
            I love being with my family.
            I enjoy playing piano and watching Marvel movies. </p>
            <br/>
            <p>I enjoy learning new ways to build meaningful projects that uplift and improve the lives of people and businesses. </p>
            <br/>
            <p>I would love to get to know more about you as well. Feel free to reach out to me below.</p>
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