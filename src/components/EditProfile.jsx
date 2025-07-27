import { useState } from "react";
import { BASE_URL } from "../utills/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import axios from "axios";

const EditProfile = ({ data }) => {
  const [firstName, setFirstName] = useState(data?.firstName);
  const [lastName, setLastName] = useState(data?.lastName);
  const [age, setAge] = useState(data?.age);
  const [gender, setGender] = useState(data?.gender);
  const [photoUrl, setPhotoUrl] = useState(data?.photoUrl);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const dispatch = useDispatch();

  const handleSaveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      setSuccessMsg("Profile updated successfully");
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <legend className="fieldset-legend">Firstname</legend>
          <input
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <legend className="fieldset-legend">Lastname</legend>
          <input
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <legend className="fieldset-legend">Age</legend>
          <input
            type="text"
            className="input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <legend className="fieldset-legend">Gender</legend>
          <input
            type="text"
            className="input"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <legend className="fieldset-legend">Photo</legend>
          <input
            type="text"
            className="input"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <div className="flex flex-col card-actions items-center my-2">
            {successMsg && <p>{successMsg}</p>}
            <button className="btn btn-primary" onClick={handleSaveProfile}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
