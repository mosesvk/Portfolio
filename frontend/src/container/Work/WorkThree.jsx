import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper/wrapper';

import './WorkThree.css';

import { content } from './content';

const transition = { duration: 0.5, ease: 'easeInOut' };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};

const Post = () => {
  const params = useParams();
  const id = Number(params.id);

  const { title, description, text, imgSrc } = content[id];

  return (
    <motion.div
      className='page'
      initial='exit'
      animate='enter'
      exit='exit'
      variants={postVariants}
    >
      <div className='link-wrapper'>
        <Link to='/'>Back to Home page</Link>
      </div>
      <div className='post'>
        <img className='post__img' src={imgSrc} alt={title} />
        <h1 className='heading'>{title}</h1>
        <p>{description}</p>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

const postPreviewVariants = {
  initial: { x: '100%', opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: '-100%', opacity: 0, transition },
};

const PostPreview = ({ id, title, description, imgSrc }) => {
  return (
    <motion.div className='post-preview' variants={postPreviewVariants}>
      <img className='post-preview__img' src={imgSrc} alt={title} />
      <div className='post-preview__text'>
        <h2 className='heading'>{title}</h2>
        <p>{description}</p>
        <Link to={`/post/${id}`}>Learn more</Link>
      </div>
    </motion.div>
  );
};

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const Blog = () => {
  return (
    <div className='page'>
      <motion.div
        className='blog-list'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={blogVariants}
      >
        {content.map((post) => (
          <PostPreview key={post.id} {...post} />
        ))}
      </motion.div>
    </div>
  );
};

const WorkThree = () => {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes>
          <Route exact path='/' element={<Blog />} />
          <Route exact path='/post/:id' element={<Post />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default AppWrap(
  MotionWrap(WorkThree, 'app__works'),
  'work',
  'app__primarybg'
);
