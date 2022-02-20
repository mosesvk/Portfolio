import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';
import { AiFillEye } from 'react-icons/ai';

import resumeImg from '../../assets/resume.jpg';
import { AppWrap, MotionWrap } from '../../wrapper/wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';
import '../Work/Work.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills &&
            skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={skill.name}
              >
                <div
                  className='app__flex'
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          // animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-portfolio'
        >
          <div className='app__work-item app__flex'>
            <div className='app__work-img app__flex'>
              <img src={resumeImg} alt='resume-img' />

              <a
                href={
                  'https://docs.google.com/document/d/1sKVvvqiWqA_lYPkbfFr4cIbze5EvfHacN-iO_w04ZB0/edit?usp=sharing'
                }
                target='_blank'
                rel='noreferrer'
              >
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className='app__work-hover app__flex'
                ></motion.div>
              </a>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>Resume</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                Check out my Resume
              </p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>Go to Link</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);