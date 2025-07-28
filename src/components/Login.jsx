import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../utills/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("jassibhai27@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      ); //using withCredentials for cors and cookies
      dispatch(addUser(res.data)); // dispatching action to user slice in store
      navigate("/");
    } catch (error) {
      setError(error?.response?.data);
    }
  }

  // const isLoginDisabled = () => {
  //   if(emailId=='' && password=='') {
  //     return true
  //   }
  //   return false
  // }
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-50 w-96">
        <div className="card-body">
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
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <p>{error}</p>

          <div className="flex flex-col items-center gap-4">
            <button
              /*disabled= {isLoginDisabled()}*/ className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link to="/signup" className="text-blue-600 hover:text-blue-800">
              <p>New User? Click to signup</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
