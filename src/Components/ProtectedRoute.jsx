import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({login,children}) => {

const token=JSON.parse(localStorage.getItem('token'));


console.log('toeknkkkkkkkkkkkk',token)


  return (
   <>
    {login? <Outlet />:null}
   </>
  )
}

export default ProtectedRoute