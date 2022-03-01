import { useState } from 'react';
import { loginUser } from './index';
import { RiLoginBoxLine } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri'

const Login = () => {
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();

    const loginHandler = (e) =>{
        e.preventDefault();
        loginUser(setUser, email, password)
    }
  return (
    <div>
      <h1>Login <RiLoginBoxLine/></h1>
      <form onSubmit={loginHandler}>
        <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)}/> <MdEmail/>
        <br/>
        <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)}/> <RiLockPasswordFill/>
        <br/>
        <button type='submit'> Login </button>
      </form>    
    </div>
  );
}

export default Login;