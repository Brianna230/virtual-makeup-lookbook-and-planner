import { useState,useEffect,useRef } from 'react'


function SignUp() {
   const[users, setUsers]=useState([]);
   const[username,setUsername]=useState('');
   const[emailaddress, setEmailaddress]=useState('')
   const[password,setPassword]=useState('')
  async function getData() {
    try{
      const response = await fetch('http://localhost:8080/signup')
      const data = await response.json()
      console.log(data);
      setUsers(data);
    }catch(e){
      console.log(e);

    }
  }
  useEffect(()=>{
    getData()
  },[])

  async function handleSubmit(e) {
    e.preventDefault()
    const user ={
      username,
      emailaddress,
      password,
    };
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
    setEmailaddress('')
    setPassword('')
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
          <input type="text" id="email-address" name='emailaddress' placeholder='Email Address' required value={emailaddress} onChange={(e)=> setEmailaddress(e.target.value)}></input><br></br>
          <label htmlFor="pass-word">Password:</label>
          <input type='password'  id='pass-word' name='password' placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
          <button type ='submit'>Sign Up</button>


        </fieldset>
      </form>

    </div>

    </>
  )
}

export default SignUp
