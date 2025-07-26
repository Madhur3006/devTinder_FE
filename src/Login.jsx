import {useState} from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')

  // console.log(emailId)
  // console.log(password)

  async function handleLogin() {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId, password
      }, {withCredentials: true})   //using withCredentials for cors and cookies 
      
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
