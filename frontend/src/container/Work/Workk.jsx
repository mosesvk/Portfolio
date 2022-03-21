import React from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from './Item';
import { List } from './List';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { AppWrap, MotionWrap } from '../../wrapper/wrapper';

import './Workk.css'

function Store() {
  let { id } = useParams();
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key='item' />}
      </AnimatePresence>
    </>
  );
}

const Workk = () => {
  return (
    <div className='container'>
      <AnimateSharedLayout type='crossfade'>
        <Router>
          <Routes>
            <Route path='/' element={<Store />} exact/>
            <Route path='/:id' element={<Store />} exact/>
          </Routes>
        </Router>
      </AnimateSharedLayout>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Workk, 'app__works'),
  'work',
  'app__primarybg'
);
