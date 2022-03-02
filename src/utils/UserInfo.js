import { useState } from 'react';
import { userInfo } from './index';
import './userInfo.css'



const UserInfo = () => {
    const [user, setUser] = useState();
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [intrests, setIntrests] = useState([]);
    const [activity, setActivity] = useState();
    const [activityDescription, setActivityDescription] = useState();
    const [state, setState] = useState(false)

    const submitHandler = (e) =>{
      e.preventDefault();
      userInfo(setUser,name, gender, age, city, country, intrests, activity, activityDescription)
      // console.log(name, activity)
      if(name && intrests){
        setState(!state)
      }
    }


  return (
    <div>
      {state ? <h1>Details submitted successfully</h1>:
      <>
      <h1>Please enter the details</h1>
      <form onSubmit={submitHandler}>
        <input id='full-name' type='text' required placeholder='Full name' onChange={(e) => setName(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='gender' onChange={(e) => setGender(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='age' onChange= {(e)=> setAge(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='city' onChange={(e)=> setCity(e.target.value)} /> 
        <br/>
        <input type='text' placeholder='country' onChange={(e)=> setCountry(e.target.value)} />
        <br/>
        <input type='text' placeholder='city' onChange={(e)=> setCity(e.target.value)} /> 
        <br/>
        <input type='text' required placeholder='intrests' onChange={(e)=> setIntrests(e.target.value)} /> 
        <p>add multiple intrests separated by comma</p>
        <input type='text' placeholder='activity' onChange={(e)=> setActivity(e.target.value)} />
        <br/>
        <textarea type='text' className='activityDesc' placeholder='activity description' onChange={(e)=> setActivityDescription(e.target.value)} />
        <br/>
        <button type='submit' > Submit </button>
      </form>
      </>
      }        
    </div>
  );
}

export default UserInfo;