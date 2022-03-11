import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../index";
import "./userInfo.css";

const UserInfo = () => {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [image, setImage] = useState();
  const [interests, setInterests] = useState([]);
  const [activity, setActivity] = useState();
  const [activityDescription, setActivityDescription] = useState();
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    userInfo(
      setUser,
      name,
      gender,
      age,
      city,
      country,
      image,
      interests,
      activity,
      activityDescription
    );
    if (name && interests) {
      setState(!state);
      setTimeout(() => navigate("/user"), 3000);
    }
  };

  return (
    <div className="user-info">
      {state ? (
        <h2>Details submitted successfully, You are being redirected...</h2>
      ) : (
        <>
          <h2>Please enter the details</h2>
          <form onSubmit={submitHandler}>
            <input
              className="user-info-input"
              id="full-name"
              type="text"
              required
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="user-info-input"
              type="text"
              placeholder="Profile picture Url"
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
            <input
              className="user-info-input"
              type="text"
              placeholder="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            <br />
            <input
              className="user-info-input"
              type="text"
              placeholder="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <input
              className="user-info-input"
              type="text"
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <input
              className="user-info-input"
              type="text"
              placeholder="country"
              onChange={(e) => setCountry(e.target.value)}
            />
            <br />
            <input
              className="user-info-input"
              type="text"
              required
              placeholder="interests"
              onChange={(e) => setInterests(e.target.value)}
            />
            <label htmlFor="Interests">
              Add multiple interests separated by comma
            </label>
            <br />
            <input
              className="user-info-input"
              type="text"
              placeholder="activity"
              onChange={(e) => setActivity(e.target.value)}
            />
            <br />
            <textarea
              type="text"
              className="activityDesc"
              placeholder="activity description"
              onChange={(e) => setActivityDescription(e.target.value)}
            />
            <br />
            <button className="user-info-input" type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default UserInfo;
