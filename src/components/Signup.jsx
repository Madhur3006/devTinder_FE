import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utills/constants";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState('')
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
        const res = await axios.post(BASE_URL+'/signup', {
            firstName, lastName, emailId, password
        }, {withCredentials: true})
        setSuccessMsg("signed up successfully")
        setPassword('')
        setTimeout(() => {
            setSuccessMsg('');
            navigate('/login')
        }, 1500)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-50 w-96">
        <div className="card-body">
          <label className="input my-2">
            <input
              type="text"
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label className="input my-2">
            <input
              type="text"
              placeholder="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
          <label className="input my-2">
            <input
              type="text"
              placeholder="Email Id"
              value={emailId}
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
            />
          </label>
          <label className="input my-2">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          {successMsg && <p className="text-center text-green-500">{successMsg}</p>}
          {password.length > 0 && <p className="text-left text-blue-500">
              Password should contain 6 characters <br />
              Password must contain one number and one alphabet <br />
              Password must conatin a capital alphabet <br />
              Password must contain special character
            </p>}
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
