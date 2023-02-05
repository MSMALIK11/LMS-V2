import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';

const StartCourseCard=({course,classTitle})=> {
  const {title} =useParams();

  console.log(course.lessons)
  return (
    <Card sx={{width:300, maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={course?.image?.url}
        title="course"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course?.title}
        </Typography>
        <Link to={`/course/session/${title}/${classTitle}`}>
      <Button variant='contained'  color="secondary">
        Start Course
      </Button>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        
      </CardActions>
    </Card>
  );
}



export default StartCourseCard