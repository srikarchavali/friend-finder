import { useState } from 'react';
import { userInfo } from './index';



const UserInfo = () => {
    const [user, setUser] = useState()
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [activity, setActivity] = useState();
    const [intrests, setIntrests] = useState([]);

    const submitHandler = (e) =>{
      e.preventDefault();
      userInfo(setUser, gender, age, city, country, activity, intrests)
    }
  return (
    <div>
      <h1>Please enter the details</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='gender' onChange={(e) => setGender(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='age' onChange= {(e)=> setAge(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='city' onChange={(e)=> setCity(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='country' onChange={(e)=> setCountry(e.target.value)} />
        <br/>
        <input type='text' placeholder='activity' onChange={(e)=> setActivity(e.target.value)} />
        <br/>
        <input type='text' placeholder='city' onChange={(e)=> setCity(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='intrests' onChange={(e)=> setIntrests(e.target.value)} /> 
        <p>add multiple intrests separated by comma</p>
        {/* <br/> */}
        <button type='submit'> Submit </button>
      </form>        
    </div>
  );
}

export default UserInfo;