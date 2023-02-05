import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleCourse } from '../Components/services/api'
import StartCourseCard from '../Components/SingleCourse/StartCourseCard'


const CourseDetails = () => {
  const [course,setCourse]=React.useState([]);
 
    const {title,
    }=useParams()

    const  getAllCourse=async()=>{
        const course=await fetchSingleCourse(title)
     
        if(course){
          setCourse(course)
        }
    }

useEffect(()=>{
    getAllCourse();

},[])

console.log('coursr session',course)



if(!course){
  return <p>Loading....</p>
}

  return (
   < >
    {
      course? <div className='courseBanner'>
        <div className='courseBackgroundImage'>

        <img src={course?.image?.url} alt=""  />
        </div>

      <div className="container course pt-4">
      <Typography variant='h3' gutterBottom>{course?.title}</Typography>
      <Typography variant='body1'>{course?.description}</Typography>

      <Typography variant='body1' ><span className='text-bold mt-2'>Instructor </span> {course?.instructor?.name}</Typography>

      </div>

<div className="startCourseCard">

      <StartCourseCard course={course} classTitle={course?.lessons?.length>0 &&course?.lessons[0]?.slug} />
</div>
      </div>:'Loading'
      

     
    }

    </>
  
   
       
   
  )
}

export default CourseDetails