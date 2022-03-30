import React, { useState, useEffect } from 'react';
import { items } from './data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { urlFor, client } from '../../client';

function CardItem() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      console.log(data);
      setWorks(data);
    });
  }, []);

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ backgroundColor: 'black' }}
      // className={`card ${theme}`}
    >
      <motion.div
        // whileHover={{ opacity: [0, 1] }}
        className='card-content'
        layoutId={`card-container-${works.id}`}
      >
        <CardMedia
          component='img'
          style={{ height: 200 }}
          src={`images/${works.id}.jpg`}
          alt={`${works.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' color='white'>
            {works.title}
          </Typography>
          <Typography variant='body2' color='white'>
            {works.category}
          </Typography>
        </CardContent>
      </motion.div>
      <Link to={`/${works.id}`} className={`card-open-link`} />
    </Card>
  );
}

export function List({ selectedId }) {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "works"]';
  //   client.fetch(query).then((data) => {
  //     setItems(data);
  //   });
  // }, []);

  // console.log(items);

  return (
    <ul className='card-list'>
      {items.map((card, idx) => (
        <CardItem key={idx} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
