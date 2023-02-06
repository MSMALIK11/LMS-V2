import React, { useEffect, useState } from 'react'
import { Grid,} from '@mui/material'

import{fetchAllAdminCourse} from '../../Components/services/api'
import AdminCoursesCard from './AdminCourseCard'
const AdminListOfCourses = () => {
    const [adminCourse,setAdminCourse]=useState([])
    const getAllAdminCourse=async()=>{
        const res=await fetchAllAdminCourse();
        console.log('res',res)
        if(res.success){
            setAdminCourse(res.course)
        }
    }

useEffect(()=>{
    getAllAdminCourse()

},[])

  return (
    <Grid container spacing={2}>
        
        {
            adminCourse?.map((course)=>{
                return(
                    <Grid item sx={12} md={4}>
                    <AdminCoursesCard course={course} />
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default AdminListOfCourses