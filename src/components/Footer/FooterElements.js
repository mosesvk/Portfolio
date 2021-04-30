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
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1050px){
    max-width: auto;
  }
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

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  &:hover {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 1050px) {
    margin: 10px 0 0;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 1050px) {
    justify-content: center;
    width: 100%;
  }
`

export const SocialIconLink = styled.a`
  color: #bcbfc9;
  font-size: 40px;
  padding: 18px 8px;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 1050px) {
    padding: 5px 10px 5px;
  }
`