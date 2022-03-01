import { useState } from 'react';
import { fetchRequest } from './index';
import { RiLoginBoxLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri'


const SignUp = () => {
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();

    const submitHandler = (e) =>{
      e.preventDefault();
      fetchRequest(setUser, username, email, password)
    }
  return (
    <div>
      <h1>Please singup</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} /> <FaUser/>
        <br/>
        <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)} /> <MdEmail/>
        <br/>
        <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)} /> <RiLockPasswordFill/>
        <br/>
        <button type='submit'> Sign UP </button>
      </form>        
    </div>
  );
}

export default SignUp;