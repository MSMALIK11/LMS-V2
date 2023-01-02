import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = ({login,children}) => {



  return (
   <>
    {login? <Outlet />:null}
   </>
  )
}

export default ProtectedRoute