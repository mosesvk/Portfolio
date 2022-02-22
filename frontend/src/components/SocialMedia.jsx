import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://github.com/mosesvk' target='_blank' rel="noreferrer">
          <FaGithub id='github'/>
        </a>
      </div>
      <div >
        <a href='https://www.linkedin.com/in/mosesvk/' target='_blank' rel="noreferrer">
          <FaLinkedin id='linkedin'/>
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/profile.php?id=100004199235959' target='_blank' rel="noreferrer">
          <FaFacebookF id='facebook'/>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
