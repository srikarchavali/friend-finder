import { useState } from "react";
import { userInfo } from "./index";
import { Link } from "react-router-dom";
import "./userInfo.css";
import { MdOutlineArrowBack } from "react-icons/md";

const UserInfo = () => {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [interests, setInterests] = useState([]);
  const [activity, setActivity] = useState();
  const [activityDescription, setActivityDescription] = useState();
  const [state, setState] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    userInfo(
      setUser,
      name,
      gender,
      age,
      city,
      country,
      interests,
      activity,
      activityDescription
    );
    // console.log(name, activity)
    if (name && interests) {
      setState(!state);
    }
  };

  return (
    <div>
      {state ? (
        <>
          <Link to="/user">
            <button className="back">
              <h2>
                <MdOutlineArrowBack />
              </h2>
            </button>
          </Link>
          <h1>Details submitted successfully</h1>
        </>
      ) : (
        <>
          <Link to="/user">
            <button className="back-arrow">
              <h2>
                <MdOutlineArrowBack />
              </h2>
            </button>
          </Link>
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
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
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
            <button type="submit"> Submit </button>
          </form>
        </>
      )}
    </div>
  );
};

export default UserInfo;
