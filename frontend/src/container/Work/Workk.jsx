import React, { useState, useEffect } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from './Item';
import { List } from './List';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import { AppWrap, MotionWrap } from '../../wrapper/wrapper';
import SocialMedia from '../../components/SocialMedia';
import { urlFor, client } from '../../client';

import './Workk.scss';

function Store() {
  let { id } = useParams();
  const imageHasLoaded = true;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setItems(data);
    });
  }, []);

  console.log(items);

  return (
    <>
      <div className='app_work-head'>
        <h2 className='head-text'>
          My <span>Portfolio</span>
        </h2>
        <SocialMedia />
      </div>
      <List
        selectedId={items._id}
        title={items.title}
        description={items.description}
        languages={items.languages || null}
        category={items.category}
        items={items}
        image={items.imgUrl}
      />
      <AnimatePresence>
        {id && imageHasLoaded && (
          <Item
            id={items._id}
            key={items._id}
            title={items.title}
            description={items.description}
            languages={items.languages || null}
            category={items.category}
            items={items}
            image={items.imgUrl}
          />
        )}
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
            <Route path='/' element={<Store />} exact />
            <Route path='/:id' element={<Store />} exact />
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
