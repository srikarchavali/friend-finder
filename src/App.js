import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./utils/signUp";
import Login from "./utils/login";
//import UserInfo from './utils/UserInfo';
import NavBar from "./utils/navBar";
import UserInfo from "./utils/UserInfo";
import UserPage from "./utils/UserPage";
//import About from "./utils/about";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          {/* <Route path="/about" exact element={<About />} /> */}
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/UserPage" exact element={<UserPage />} />
          <Route path="/UserInfo" exact element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
