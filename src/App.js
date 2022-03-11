import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./utils/footer/footer.js";
import Login from "./utils/Login/login";
import NavBar from "./utils/Navbar/navBar";
import SearchBar from "./utils/Search/search";
import UserInfo from "./utils/user/UserInfo";
import UserPage from "./utils/user/UserPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="home-page">
                <NavBar />
                <Login />
                <Footer />
              </div>
            }
          />
          <Route path="/user" exact element={<UserPage />} />
          <Route path="/userInfo" exact element={<UserInfo />} />
          <Route path="/search" exact element={<SearchBar />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
