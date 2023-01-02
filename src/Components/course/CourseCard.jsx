import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box, capitalize, Chip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';





const CourseCard=({course})=> {


 
  return (
    <Card elevation={4} className="cardWraper">
     
      <CardMedia
        component="img"
        height="194"
        image={course?.image.url}
      />
      <CardContent>
      {/* content here */}
      <Link to={`course-details/${course?.slug}`}>
      <Typography variant='h6' sx={{textTransform:"capitalize"}} >  {course?.title}</Typography>
      </Link>

      <Typography variant='subtitle2' >{course?.instructor.name}</Typography>
      <Box sx={{display:'flex',gap:'3px 4px'}}>
      <Typography variant='body2' className="mt-1 text-warning">5.0</Typography>
      <Rating name="read-only"   value={5} readOnly />
      </Box>
      <div className='d-flex align-items-center mt-3 '> <Chip label="Free" /></div>
    
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
     
    </Card>
  );
}


export  default CourseCard
