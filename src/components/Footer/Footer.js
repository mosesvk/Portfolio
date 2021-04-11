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
              <SocialIconLink href="https://www.linkedin.com/in/mosesvk/" target="_blank" aria-label="LinkedIn"
              rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/mosesvk" target="_blank" aria-label="Github"
              rel="noopener noreferrer">
                <FaGithubSquare />
              </SocialIconLink>
              <SocialIconLink href="https://www.facebook.com/profile.php?id=100004199235959" target="_blank" aria-label="Facebook"
              rel="noopener noreferrer">
                <FaFacebookSquare />
              </SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA" target="_blank" aria-label="Youtube"
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