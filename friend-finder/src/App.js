import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './utils/signUp';
import Login from './utils/login';
// import UserInfo from './utils/UserInfo';
import NavBar from './utils/navBar';
import Darkmode from 'darkmode-js';

//new Darkmode().showWidget();

const App = () => {

  return (
    <div>
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={          
          <div>
            <h1>Friend Finder</h1>
            <p>Find Connect Enjoy</p>
            {/* <img src='./utils/image.png' alt="logo"></img> */}
          </div>} />
          <Route path='/about' exact element={<h1>About Page</h1>}/>
          {/*<p>With this App, you will be able to find people with the same likes and hobbies all over the world. Enjoy it!.</p>} /> */}
          <Route path='/login' exact element={<Login/>}/>   
          <Route path='/signUp' exact element={<SignUp/>}/>    
          {/* <Route path='/user-info' exact element={<UserInfo/>}/>  */}
        </Routes>
      </Router>
      {/* <SignUp/>     
      <Login/>   */}
    </div>
  );
}

export default App;