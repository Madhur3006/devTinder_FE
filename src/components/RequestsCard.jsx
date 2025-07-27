import axios from "axios";
import React from "react";
import { BASE_URL } from "../utills/constants";
import { useDispatch } from "react-redux";
import { removeRequests } from "../utills/requestsSlice";

const RequestsCard = ({ data }) => {
  const { firstName, lastName } = data.fromUserId;
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(_id))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-neutral text-neutral-content w-96 my-2">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary"onClick={() => {reviewRequest("rejected", data._id)}}>Deny</button>
          <button className="btn btn-secondary" onClick={() => {reviewRequest("accepted", data._id)}}>Accept</button>
        </div>
      </div>
    </div>
  );
};

export default RequestsCard;
