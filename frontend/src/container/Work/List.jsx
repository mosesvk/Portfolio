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

function CardItem({items}) {

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ backgroundColor: 'black' }}
      // className={`card ${theme}`}
    >
      <motion.div
        // whileHover={{ opacity: [0, 1] }}
        className='card-content'
        layoutId={`card-container-${items._id}`}
      >
        <CardMedia component='img' style={{ height: 200 }}>
          {items.imgUrl && <img src={urlFor(items.imgUrl)} alt={`${items.title}`} />}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' color='white'>
            {items.title}
          </Typography>
          <Typography variant='body2' color='white'>
            {items.category}
          </Typography>
        </CardContent>
      </motion.div>
      <Link to={`/${items._id}`} className={`card-open-link`} />
    </Card>
  );
}

export function List({
  items,
}) {
  return (
    <ul className='card-list'>
      {items.map((card, idx) => (
        <CardItem
          items={items}
        />
      ))}
    </ul>
  );
}
