import { useState } from 'react';
import { fetchRequest } from './index';


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
        <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)} />
        <br/>
        <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)} />
        <br/>
        <button type='submit'> Sign UP </button>
      </form>        
    </div>
  );
}

export default SignUp;