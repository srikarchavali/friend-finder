import { useState } from 'react';
import { loginUser } from './index';


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
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)} />
        <br/>
        <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)} />
        <br/>
        <button type='submit'> Login </button>
      </form>    
    </div>
  );
}

export default Login;