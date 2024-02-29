import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProdectRouter = () => {
  const auth = JSON.parse(localStorage.getItem('loginEmail'))
  console.log(auth);
    return auth ? <Outlet/> : <Navigate to={'/'}/>
}

export default ProdectRouter