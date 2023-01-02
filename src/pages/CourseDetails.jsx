import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleCourse } from '../Components/services/api'


const CourseDetails = () => {
  const [course,setCourse]=React.useState([])
    const {title}=useParams()

    const  getAllCourse=async()=>{
        const course=await fetchSingleCourse(title)
     
        if(course){
          setCourse(course)
        }
    }

useEffect(()=>{
    getAllCourse();

},[])

  return (
   <>
    {
      course? <div className='courseBanner'>
        <div className='courseBackgroundImage'>

        <img src={course?.image?.url} alt=""  />
        </div>

      <div className="container course pt-4">
      <Typography variant='h3'>{course?.title}</Typography>
      <Typography variant='body1'>{course?.description}</Typography>

      <Typography variant='body1'><span className='text-bold mt-2'>Instructor </span> {course?.instructor?.name}</Typography>

      </div>
      </div>:'Loading'
      

     
    }
    </>
  
   
       
   
  )
}

export default CourseDetails