import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoIosSettings } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";
import { deleteUserInfo } from "../index";
import { Link } from "react-router-dom";
import { allUsers } from "../index";
import "./UserPage.css";

const UserPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const dataHandler = async () => {
    const userData = await allUsers();
    setData(userData);
    console.log(data);
  };
  useEffect(() => dataHandler(), []);

  const deleteUser = () => {
    deleteUserInfo(data.email);
    const notify = () => toast("Profile deleted, redirecting...");
    notify();
    setTimeout(() => navigate("/"), 2000);
  };
  const notify = () => toast("Logout Successful");
  return (
    <>
      <div className="login-navbar">
        <Link to="/">
          <button className="logout" onClick={notify}>
            <h2>Logout</h2>
          </button>
        </Link>
        <Link to="/userInfo">
          <button className="settings">
            <h2>
              <IoIosSettings />
            </h2>
          </button>
        </Link>
        <button className="delete" onClick={deleteUser}>
          <h2>
            <MdDelete />
          </h2>
        </button>
      </div>
      <br />
      {/* <h1>User Profile Cards</h1> */}
      <div className="user-profiles">
        {data.map((data) => (
          <div className="user-card">
            <img src={data.image} alt="" className="image" />
            <p key={data.name}>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>Age:</strong> {data.age}
            </p>
            <p>
              <strong>Gender:</strong> {data.gender}
            </p>
            <p>
              <strong>City:</strong> {data.city}
            </p>
            <p>
              <strong>Country:</strong> {data.country}
            </p>
            <p key={data.interests}>
              <strong>Interests:</strong> {data.interests}
            </p>
            <p key={data.activity}>
              <strong>Activity:</strong> {data.activity}
            </p>
            <div className="overlay">
              <br />
              <br />
              <strong>Activity:</strong> {data.activity}
              <p>
                <strong>Description:</strong> {data.activityDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPage;
