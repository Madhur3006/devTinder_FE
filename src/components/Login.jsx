import {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utills/constants";

const Login = () => {
  const [emailId, setEmailId] = useState('jassibhai27@gmail.com')
  const [password, setPassword] = useState('Jasprit@123')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // console.log(emailId)
  // console.log(password)

  async function handleLogin() {
    try {
      const res = await axios.post(BASE_URL+"/login", {
        emailId, password
      }, {withCredentials: true}) //using withCredentials for cors and cookies 
      dispatch(addUser(res.data))// dispatching action to user slice in store
      navigate('/')  
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <label className="input my-2">
            <input type="text" placeholder="Email Id" value = {emailId} onChange={(e) => {setEmailId(e.target.value)}} />
          </label>
          <label className="input my-2">
            <input type="text" placeholder="Password" value = {password} onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
