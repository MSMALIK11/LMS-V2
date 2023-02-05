import { Grid } from '@mui/material'
import React,{useState,useEffect} from 'react'
import HomeBanner from '../Components/Banner/HomeBanner'

import CourseCard from '../Components/course/CourseCard'
import CategoryTab from '../Components/course/Tab/Tab'

import { fetchAllCourse } from '../Components/services/api'

const HomePage = () => {
  const [courses,setCourses]=useState([])

const getAllCourse=async()=>{
  const res=await fetchAllCourse();

 
  if(res){
    setCourses(res)
  }
}

useEffect(()=>{
  getAllCourse()

},[])

  return (
    <div>
      <HomeBanner />
      <CategoryTab />
        <div className="mt-4 px-4">

          <Grid container spacing={2}>
            {
              courses?.length>0?courses.map((course)=>{
                return(
                  <Grid item  xs={12} md={3}>

                     <CourseCard course={course} />
                  </Grid>
                )
              }):'Loading...'
            }
          </Grid>

     
       
        </div>

    </div>
  )
}

export default HomePage