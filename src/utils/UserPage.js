import React, { useState, useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { deleteUserInfo } from "./index";
import { Link } from "react-router-dom";
import { UserCardData } from "./UserCardData.js";

const UserPage = (state, setState, email) => {
  let info = UserCardData();
  console.log(info);

  const deleteUser = () => {
    deleteUserInfo(email);
  };
  return (
    <>
      <div className="login-navbar">
        <button className="logout" onClick={() => setState(!state)}>
          Logout
        </button>
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
      <h1>User Profile Cards</h1>
      {info.map((data) => (
        <>
          <img src={data.avatar} alt="" />
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Sex: {data.gender}</p>
          <p>City: {data.city}</p>
          <p>Country: {data.country}</p>
          <p>Avatar: {data.avatar}</p>
        </>
      ))}
    </>
  );
};

export default UserPage;
