import styled from 'styled-components';

export const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialLink = styled.a`
  color: #0e0f10;
  font-size: 40px;
  padding: 12px 5px;

  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
    font-size: 60px;
  }

  &:hover {
    opacity: 0.55;
    color: #0e0f10;
  }
`;

export const ExitButton = styled.button`
  border: none;
  background: none;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 1.5rem;

  &:hover {
    background: #e9656596;
  }
`;

export const ModalLink = styled.button`
  border: none;
  padding: 0 5px;
  margin: 0 10px;
  font-size: 1.5rem;
  border-radius: 5px;

  &:hover {
    transition: 0.5s;
  }
`;

export const ModalLinkDiv = styled.div`
  margin-top: 25px;
  margin-left: 0;
  padding: 12px;
  background: #e0dada;
`;
