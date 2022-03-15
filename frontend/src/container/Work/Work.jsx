import React, { useState, useEffect, useRef } from 'react';
import { AiFillEye, AiFillGithub, AiOutlineConsoleSql } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper/wrapper';
import { urlFor, client } from '../../client';
import SocialMedia from '../../components/SocialMedia';
import Popup from '../../components/Modal/Popup';

import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [workId, setWorkId] = useState();
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y : 0, opacity: 1 });
  const [modalOpen, setModalOpen] = useState(false);

  const myRefs = useRef([]);

  const close = () => setModalOpen(false);
  const open = (id, idx) => {
    setModalOpen(true)
    setWorkId(id);
    console.log(idx)
    console.log(id)
  };

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
    <div className='work-container'>
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
          filterWork.map((work, idx) => (
            <div className='app__work-item app__flex' key={work._id}>
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
                  onClick={() => open(work._id, idx)}
                >
                  INFO
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text italic' style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className='app__social-div d-flex'>
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.5] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye className='eye' />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: [1, 1.35] }}
                      transition={{ duration: 0.25 }}
                      whileTap={{ scale: 0.8 }}
                      className='app__flex'
                    >
                      <AiFillGithub className='github' />
                    </motion.div>
                  </a>
                </div>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
            
          ))
        }
        {modalOpen && filterWork.map((item, idx) => (
          <Popup id={workId} ref={(elem) => myRefs.current[idx] = elem} >
            <h1>Popup</h1>
          </Popup>
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
      ></AnimatePresence>{' '}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
