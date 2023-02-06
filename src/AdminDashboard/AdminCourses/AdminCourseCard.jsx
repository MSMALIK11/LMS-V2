import { Card,CardContent, CardMedia, Chip, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function AdminCoursesCard({course}){
    
    return (


        <>
         <Card elevation={4} className="cardWraper">
     
     
     
      <CardMedia
        component="img"
        height="194"
        image={course?.image.url}
      />
      <CardContent>
      {/* content here */}
      <Chip className='chip' label={`${course?.lessons?.length>1?'Publish':'Private'}`} size="small"  color={`${course?.lessons?.length>1?'success':'error'}`} />
      <Link to={`course-add/${course?.slug}`}>
      <Typography variant='h6' sx={{textTransform:"capitalize"}} >  {course?.title}</Typography>
      </Link>

  
      <Box sx={{display:'flex',gap:'3px 4px',alignItems:'center'}}>

      </Box>
      <div className='d-flex align-items-center mt-3 '> <Chip label="Free" /></div>
    
      </CardContent>
    
     
    </Card>

        </>
    )
}