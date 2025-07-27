import React from "react";

const ConnectionCard = ({ data }) => {
  const { firstName, lastName } = data;
  return (
    <>
      <div className="card card-border bg-base-300 w-96 my-3">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <button className="btn btn-primary">Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectionCard;
