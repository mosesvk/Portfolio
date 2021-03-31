import React from 'react'
import {
  FaLinkedin, 
  FaGithubSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagram
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
                <FaGithubSquare />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook"
              rel="noopener noreferrer">
                <FaFacebookSquare />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube"
              rel="noopener noreferrer">
                <FaYoutubeSquare />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram"
              rel="noopener noreferrer">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;