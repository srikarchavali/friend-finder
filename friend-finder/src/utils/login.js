import React, { useState } from 'react';
import { loginUser } from './index';
import UserInfo from './UserInfo';
import { RiLoginBoxLine } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri'

const Login = () => {
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    const [state, setState] = useState(false);

    const loginHandler = async (e) =>{
        e.preventDefault();
        let login = await loginUser(setUser, email, password);
        console.log(login)
        if(login===true){
          setState(!state);
        }
    }
  return (
      <div>
        {state ? 
          <>
            <button onClick={()=> setState(!state)}>Logout</button>
            <UserInfo/>
          </>
          :
        <>
          <h1>Login <RiLoginBoxLine/></h1>
          <form onSubmit={loginHandler}>
          <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)}/> <MdEmail/>
          <br/>
          <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)}/> <RiLockPasswordFill/>
          <br/>
          <button type='submit'> Login </button>
          </form>
        </>
      
        }
      </div>
  );
}

export default Login;