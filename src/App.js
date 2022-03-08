import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./utils/signUp";
import Login from "./utils/login";
// import UserInfo from './utils/UserInfo';
import NavBar from "./utils/navBar";
import UserInfo from "./utils/UserInfo";
import UserPage from "./utils/UserPage";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/about" exact element={<h1>About Page</h1>} />
          <Route path="/user" exact element={<UserPage />} />
          <Route path="/userInfo" exact element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
