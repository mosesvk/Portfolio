import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

import { AppWrap } from '../../wrapper/wrapper';
import { images } from '../../constants/constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 2.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div>
            <h1 className='header-h1'>MOSES KAUMATULE</h1>
            <p className='header-p'>Software Engineer</p>
          </div>
          {/* <div className="tag-cmp app__flex">
          <p className="p-text">Frontend Engineer</p>
          <p className="p-text">Freelancer</p>
        </div> */}
        </div>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <a href='#about' style={{textDecoration: 'none', color: 'black'}}>
            <p>SEE MORE</p>
          </a>
        </motion.button>
      </motion.div>

      {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}
    </div>
  );
};

// export default AppWrap(Header, 'home');
export default AppWrap(Header, 'home');
