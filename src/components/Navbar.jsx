import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utills/constants";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utills/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);    // subscribing to the store for user data once login
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      const res = await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
      dispatch(removeUser())
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">🧛DevTinder</Link>
      </div>
      {user.isLoggedIn && (
        <div className="flex gap-2">
          <div className="dropdown dropdown-end mx-5 flex">
            <p className="test-xxl my-2 mr-3">Welcome {user.info.firstName}!</p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow"
            >
              <li>
                <Link to='/profile'><div className="justify-between">Profile</div></Link>
              </li>
              <li>
                <div onClick={handleLogout}>Logout</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
