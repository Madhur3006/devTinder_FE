import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { BASE_URL } from '../utills/constants'
import RequestsCard from './RequestsCard'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utills/requestsSlice'

const Requests = () => {

  const requests = useSelector((store) => store.requests)
  const dispatch = useDispatch()
  
  const fetchRequests = async () => {
    try {
        const res = await axios.get(BASE_URL+'/user/requests/received', {withCredentials: true})
        dispatch(addRequests(res?.data?.data))
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])


  if(!requests) return;
  if(requests.length===0) return(<h1 className='flex justify-center my-5'>No New Requests</h1>)

  

  return (
    <div className='flex flex-col items-center'>
        <h1 className='my-5 text-2xl text-base-content'>Requests</h1>
        {requests.map((request) => (<div key={request._id}><RequestsCard data={request}/></div>))}
    </div>
  )
}

export default Requests