import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./utils/footer/footer.js";
import Login from "./utils/Login/login";
import NavBar from "./utils/Navbar/navBar";
import SearchBar from "./utils/Search/search";
import UserInfo from "./utils/user/UserInfo";
import UserPage from "./utils/user/UserPage";

const App = () => {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
          {/* <Route path="/about" exact element={<h1>About Page</h1>} /> */}
          <Route path="/user" exact element={<UserPage />} />
          <Route path="/userInfo" exact element={<UserInfo />} />
          <Route path="/search" exact element={<SearchBar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
