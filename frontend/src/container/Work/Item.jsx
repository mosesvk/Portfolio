import React from 'react';
import { motion } from 'framer-motion';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Link } from 'react-router-dom';
// import { items } from './data';

export function Item({
  id,
  description,
  languages,
  items,
  image,
}) {
  const newItems = items.find((item) => item.id === id);
  // console.log(newItems)
  const { category, title } = newItems;

  return (
    <>
      <div className='card-content-container open'>
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
          >
            <img className='card-image' src={`images/${id}.jpg`} alt='' />
          </motion.div>
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div>
          <motion.div className='content-container' animate>
            <LoremIpsum
              p={1}
              avgWordsPerSentence={3}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className='overlay'
      >
        <Link to='/' />
      </motion.div>
    </>
  );
}
