import React from 'react'
import {
  FaLinkedin, 
  FaGithub,
  FaFacebook,
  FaYoutube
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Copyright &copy; Moses Kaumatule</SocialLogo>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn"
              rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github"
              rel="noopener noreferrer">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook"
              rel="noopener noreferrer">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube"
              rel="noopener noreferrer">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;