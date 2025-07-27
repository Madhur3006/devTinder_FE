import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utills/constants'

const Body = () => {

  const user = useSelector((store) => store.user) 
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL+'/profile/view', {withCredentials: true})
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(user.isloggedIn) {
      fetchData()
    }
    navigate('/login')
  }, []) 

  return (
    <>
        <Navbar />
        <Outlet />     
        <Footer />
    </>
  )
}

export default Body