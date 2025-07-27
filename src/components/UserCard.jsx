import axios from "axios";
import React from "react";
import { BASE_URL } from "../utills/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../utills/feedSlice";

const UserCard = ({user}) => {

  const dispatch = useDispatch()

  const reviewUser = async (status, _id) => {
    try {
      const res = await axios.post(BASE_URL+'/request/send/'+status+'/'+_id,{}, {withCredentials: true})
      dispatch(removeUser(_id))
    } catch (error) {
      console.log(error)
    }
  }

  if (!user) return;
  return (
    <div className="card bg-base-300 w-96 shadow-sm my-10 mx-2">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Profile Photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center my-2">{user.firstName +' ' + user.lastName}</h2>
        {user.age && user.gender &&<p className='text-xl'> 
          {user.age + ' ' + user.gender}
        </p>}
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick = {() => {reviewUser("ignored", user._id)}}>Ignore</button>
          <button className="btn btn-secondary" onClick = {() => {reviewUser("interested", user._id)}}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
