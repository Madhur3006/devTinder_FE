import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((store) => store.user)
  return (
    <div className='flex justify-center'>
        <EditProfile data={user.info}/>
    </div>
  )
}

export default Profile