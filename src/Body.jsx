import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <>
        <Navbar />
        <Outlet />     // Space for children routes 
        <Footer />
    </>
  )
}

export default Body