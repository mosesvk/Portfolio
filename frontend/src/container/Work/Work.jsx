import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper/wrapper';
import { urlFor, client } from '../../client';
import SocialMedia from '../../components/SocialMedia';
import Modal from '../../components/Modal/Modal';

import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        My <span>Portfolio</span> Section
      </h2>
      <SocialMedia />
      <div className='app__work-filter'>
        {['UI/UX', 'Full Stack', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {!filterWork && <h1>No Data pulled</h1>}
        {filterWork &&
          filterWork.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className='app__work-hover app__flex'
                  onClick={() => (modalOpen ? close() : open())}
                >
                  INFO
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text italic' style={{ marginTop: 10 }} >
                  {work.description}
                </p>

                <div
                  className='app__social-div d-flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer' >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye className='eye' />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub className='github'/>
                    </motion.div>
                  </a>
                </div>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>{' '}
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
