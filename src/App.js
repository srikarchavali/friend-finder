import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './utils/signUp';
import Login from './utils/login';


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' exact element={<Login/>} />   
          <Route path='/signUp' exact element={<SignUp/>} />    
        </Routes>
      </Router>
      {/* <SignUp/>     
      <Login/>   */}
    </div>
  );
}

export default App;