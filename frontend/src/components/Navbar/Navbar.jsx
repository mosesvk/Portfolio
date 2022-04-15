import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import SocialMedia from '../../components/SocialMedia';
import { images } from '../../constants/constants';
import Divider from '@mui/material/Divider';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

import './Navbar.scss';

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  // closed: {
  //   transition: {
  //     staggerChildren: 0.2,
  //     staggerDirection: -1,
  //   },
  // },
  open: {
    transition: {
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 90) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      className='app__navbar'
      style={{
        background: scrollNav ? '#1e212d' : 'transparent',
      }}
    >
      <div
        className='app__navbar-logo'
        style={{
          color: '#fff3e6',
        }}
      >
        <motion.a
          href='#home'
          whileHover={{ scale: 1.1 }}
          variants={itemVariants}
        >
          <h2>&lt; Moses K &gt;</h2>
        </motion.a>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'work', 'skills', 'about', 'contact'].map((item) => (
          <li className='app__flex p-tex`t' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
          {toggle && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
              }}
              transition={{ duration: 0.1 }}
            >
              <motion.div
                className='container'
                initial='closed'
                animate='open'
                variants={sideVariants}
              >
                <HiX
                  onClick={() => setToggle(false)}
                  whileHover={{ scale: 1.1 }}
                />
                <ul>
                  {['home', 'work', 'skills', 'about', 'contact'].map(
                    (item) => (
                      <li key={item}>
                        <motion.a
                          href={`#${item}`}
                          whileHover={{ scale: 1.1 }}
                          variants={itemVariants}
                          onClick={() => setToggle(false)}
                          className='side-links'
                        >
                          {item}
                        </motion.a>
                      </li>
                    )
                  )}
                  <Divider variant='middle' />
                  <li>
                    <motion.a
                      href={`https://www.linkedin.com/in/mosesvk/`}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      onClick={() => setToggle(false)}
                      className='side-links'
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href={`https://github.com/mosesvk`}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      onClick={() => setToggle(false)}
                      className='side-links'
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={`https://www.facebook.com/profile.php?id=100004199235959`}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      onClick={() => setToggle(false)}
                      className='side-links'
                    >
                      <FaFacebookF />
                    </motion.a>
                  </li>
                </ul>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
