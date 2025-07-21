import React from "react";
import { useState } from "react";

function Login(){
     const[userId, setUserId]=useState('');
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    async function handleSubmit(e) {
    e.preventDefault()
    const user ={
      username,
      password,
    };                 // add try/catch
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
    setUsername('')
    setPassword('')
  }
  console.log('userid:', userId)
    

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