import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {useUser} from './UserContext.jsx'

function Login(){
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const {setUserId} = useUser()
    
    async function handleSubmit(e) {
    e.preventDefault()
    
    const user ={
      username:username.trim(),
      password:password.trim(),
    };  
    try{              // add try/catch
    const response = await fetch('http://localhost:8080/login',{ 
      method:'POST',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
    setUserId(data.id)
    navigate('/planner', {state:data.id})
  }catch(error){
    console.error('Login error:', error.message)
  } 
}
    

    return(

        <div className="loginform">
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h2>Login</h2>
          <label htmlFor= "user-name">User Name:</label>
          <input type="text" id="user-name" name="username" required value={username} onChange={(e)=>setUsername(e.target.value)}></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          <div className='button-container'>
          <button type ='submit'>Login</button>
          </div>
        </fieldset>
     </form>

        </div>
    )
}

export default Login