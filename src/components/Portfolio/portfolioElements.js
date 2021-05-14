import styled from 'styled-components'


export const SocialWrap = styled.div`
  display: flex; 
  justify-content: center;
`

export const SocialLink = styled.a`
  color: #0e0f10;
  font-size: 40px;
  padding: 12px 5px;

  @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (-webkit-min-device-pixel-ratio: 1.5){
      font-size: 60px;
    }

  &:hover {
    opacity: .55;
    color: #0e0f10;
  }

`

