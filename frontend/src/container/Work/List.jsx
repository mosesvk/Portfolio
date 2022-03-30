import React, { useState, useEffect } from 'react';
// import { items } from './data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { urlFor, client } from '../../client';

function CardItem({ id, category, title, description, items, image }) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ backgroundColor: 'black' }}
      // className={`card ${theme}`}
    >
      <motion.div
        // whileHover={{ opacity: [0, 1] }}
        className='card-content'
        layoutId={`card-container-${id}`}
      >
        <CardMedia component='img' style={{ height: 200 }}>
          <img src={image} alt={`${title}`} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' color='white'>
            {title}
          </Typography>
          <Typography variant='body2' color='white'>
            {category}
          </Typography>
        </CardContent>
      </motion.div>
      <Link to={`/${id}`} className={`card-open-link`} />
    </Card>
  );
}

export function List({ selectedId, id, category, description, title, items, image }) {
  return (
    <ul className='card-list'>
      {items.map((card, idx) => (
        <CardItem
          key={idx}
          {...card}
          isSelected={card.id === selectedId}
          id={id}
          category={category}
          description={description}
          title={title}
          items={items}
          image={image}
        />
      ))}
    </ul>
  );
}
