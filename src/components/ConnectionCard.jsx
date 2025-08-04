import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ConnectionCard = ({ data }) => {
  const { _id, firstName, lastName } = data;
  const navigate = useNavigate()

  return (
    <>
      <div className="card card-border bg-base-300 w-96 my-3">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <button onClick = {() => navigate(`/chat/${_id}`)} className="btn btn-primary">Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectionCard;
