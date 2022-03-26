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

function CardItem({ id, title, category, theme }) {
  return (
    <Card sx={{ maxWidth: 345 }} className={`card ${theme} bg-gray-900`}>
      <CardActionArea>
        <motion.div
          // whileHover={{ opacity: [0, 1] }}
          // className='card-content'
          layoutId={`card-container-${id}`}
        >
          <CardMedia
            component='img'
            height='150'
            image={`images/${id}.jpg`}
            alt={`${title}`}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' color='white'>
              {title}
            </Typography>
            <Typography variant='body2' color='white'>
              {category}
            </Typography>
          </CardContent>
        </motion.div>
        <Link to={id} className={`card-open-link`} />
      </CardActionArea>

      <CardActions></CardActions>
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
