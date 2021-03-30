import styled from 'styled-components';
import {Link} from 'react-router-dom';

/* #fff3e6 --> Tan  */
/* #2168eb --> Blue  */
/* #1e212d --> Black  */

export const FooterContainer = styled.footer`
background-color: #1e212d
`

export const FooterWrap = styled.div`
  padding: 0 24px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1050px;
  margin: 0 auto;
`

export const SocialMedia = styled.div`
  max-width: 1300px;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding-top: 15px;
  }
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff; 
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: border-left;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 40px;
  padding-bottom: 18px;

  &:hover {
    color: #f9ddbf;
  }
`