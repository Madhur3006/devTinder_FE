import React from "react";

const UserCard = ({user}) => {
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
          <button className="btn btn-primary">Rejected</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
