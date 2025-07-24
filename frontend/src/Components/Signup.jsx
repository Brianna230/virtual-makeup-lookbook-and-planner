import { useState,useEffect,useRef } from 'react'
import { useNavigate,Link } from 'react-router-dom';


function SignUp() {
   const[users, setUsers]=useState([]);
   const[username,setUsername]=useState('');
   const[email, setEmail]=useState('')
   const[password,setPassword]=useState('')
  

  async function handleSubmit(e) {
    e.preventDefault()
    const user ={
      username:username.trim(),
      email:email.trim(),
      password:password.trim(),
    }; 
  try{         // add try/catch
    const response = await fetch('http://localhost:8080/signup',{ 
      method:'POST',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const newUsers = await response.json()
    console.log(newUsers)
    setUsers([...users,newUsers])
    setUsername('')
    setEmail('')
    setPassword('')
  }catch(error){
    console.error('Sign up error',error.message)

  }
  }

  return (
    <>
    <div className='SignUpform'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <label htmlFor= "user-name">User Name:</label>
          <input type="text" id="user-name" name="username" placeholder='User name' required value={username} onChange={(e)=>setUsername(e.target.value)}></input><br></br>
          <label htmlFor="email-address">Email Address:</label>
          <input type="email" id="email-address" name='email' placeholder='Email Address' required value={email} onChange={(e)=> setEmail(e.target.value)}></input><br></br>
          <label htmlFor="pass-word">Password:</label>
          <input type='password'  id='pass-word' name='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
          <div className='button-container'>
          <button type ='submit'>Sign Up</button>
          </div>


        </fieldset>
      </form>

    </div>

    </>
  )
}

export default SignUp
