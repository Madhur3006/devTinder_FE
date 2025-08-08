import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utills/constants";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { addFeed } from "../utills/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

 

  if (!feed) return;
  if (feed.length === 0)
    return (
      <h1 className="flex justify-center my-5">You have explored all user</h1>
    );

  return (
    <>
    <div className="flex items-center justify-center mt-15">
      <div className="carousel carousel-center bg-base-300 rounded-box max-w-md space-x-6 p-4">
        {feed.data &&
          feed.data.map((data) => {
            return (
              <div className="carousel-item">
                <UserCard user={data}/>
              </div>
            );
          })}
      </div>
    </div>
    <div className="flex items-center justify-center mt-4">
      <p> Slide to new User</p>
    </div>
    </>
  );
};

export default Feed;
