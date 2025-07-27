import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utills/constants'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './userCard'
import { addFeed } from '../utills/feedSlice'

const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector((store) => store.feed)

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL+'/feed', {withCredentials: true})
      dispatch(addFeed(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  if (feed==null) return ;

  return (
    <div className='flex justify-center'>
      {/* <div><UserCard user={feed.data[0]}/></div>      */}
      {feed.data.map((user) => <div key={user._id}><UserCard user={user}/></div>)}
    </div>
  )
}

export default Feed