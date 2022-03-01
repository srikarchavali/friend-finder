import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './utils/signUp';
import Login from './utils/login';
import UserInfo from './utils/UserInfo';


const App = () => {

  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/' exact element={<h1>Home Page</h1>} />
          <Route path='/login' exact element={<Login/>}/>   
          <Route path='/signUp' exact element={<SignUp/>}/>    
          <Route path='/user-info' exact element={<UserInfo/>}/> 
        </Routes>
      </Router>
      {/* <SignUp/>     
      <Login/>   */}
    </div>
  );
}

export default App;