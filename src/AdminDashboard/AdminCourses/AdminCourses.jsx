import { Typography } from '@mui/material'
import React from 'react'
import AdminListOfCourses from './AdminListOfCourses'

const AdminCourses = () => {
  return (
    <div>
      <Typography variant='h4'>All Admin Course List </Typography>
      <AdminListOfCourses/>
    </div>
  )
}

export default AdminCourses