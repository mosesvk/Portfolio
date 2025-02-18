import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper/wrapper';
import { urlFor, client } from '../../client';

import mountain from '../../assets/mountain-background.png'
// import decoDiamond from '../../assets/decorations/frame-deco.png'
// import decoSquare from '../../assets/decorations/square-deco-primary.svg'
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.0, delayChildren: 1.5 }}
      className='app_about-div'
      id='about-container'
    >
      <div className='app_about-head'>
        {/* <img src={decoDiamond} alt='deco-diamond' className='deco' />
        <img src={decoSquare} alt='deco-square' className='deco' /> */}
        <h2 className='head-text'>
          About <span>Me</span>
        </h2>
      </div>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    {/* <img src={mountain} alt='mountain'/> */}
    </>
  );
};

export default AppWrap(About, 'about');
