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
    <Card sx={{ maxWidth: 345 }} className={`card ${theme}`}>
      <CardActionArea >
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          className='card-content'
          layoutId={`card-container-${id}`}
        >
          <CardMedia
            component='img'
            height='150'
            image={`images/${id}.jpg`}
            alt={`${title}`}
          />
          {/* <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
          >
            <img className='card-image' src={`images/${id}.jpg`} alt='' />
          </motion.div> */}
        </motion.div>
        <Link to={id} className={`card-open-link`} />
      </CardActionArea>
      
      <CardActions>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography>{category}</Typography>
      </CardActions>
    </Card>
  );
}

export function List({ selectedId }) {
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "works"]';
  //   client.fetch(query).then((data) => {
  //     setItems(data);
  //   });
  // }, []);

  return (
    <ul className='card-list'>
      {items.map((card) => (
        <CardItem key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}

{
  /* 
      <Card sx={{ maxWidth: 345 }} className={`card ${theme}`}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            src={`images/${id}.jpg`}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {category}
            </Typography>
            <Link to={id} className={`card-open-link`} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
        </CardActions>
      </Card>
*/
}
