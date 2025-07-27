import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utills/constants'
import ConnectionCard from './ConnectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utills/connectionsSlice'

const Connections = () => {
    const connections = useSelector((store) => store.connections)
    const dispatch = useDispatch()
    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL+'/user/connections', {withCredentials: true})
            dispatch(addConnections(res?.data?.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchConnections()
    },[])

    if(!connections) return;
    if(connections.length===0) return(<h1>No Connections! Keep Trying</h1>)

  return (
    <div className='flex flex-col items-center'>
        <h1 className='my-5 text-2xl text-base-content'>Connections</h1>
        {connections.map((connection) => (<div key={connection._id}><ConnectionCard data={connection}/></div>))}
    </div>
  )
}

export default Connections