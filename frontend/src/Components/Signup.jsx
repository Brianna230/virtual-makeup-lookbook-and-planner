import { useState,useEffect,useRef } from 'react'


function SignUp() {
   const[users, setUsers]=useState([])
   const inputRef = useRef()
  async function getData() {
    try{
      const response = await fetch('http://localhost:8080/signup')
      const data = await response.json()
      console.log(data)
      setUsers(data)
    }catch(e){
      console.log(e)

    }
  }
  useEffect(()=>{
    getData()
  },[])

  async function handleSubmit(e) {
    e.preventDefault()
    const user ={
      text: inputRef.current.value
    }
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
  }

  return (
    <>
    <div className='title'>
    <h1>Virtual Makeup lookbook and planner</h1>
    </div>
    <div className='SignUpform'>
      <form>
        <fieldset>
          <h2>Sign Up</h2>
          <label htmlFor= "user-name">User Name:</label>
          <input type="text" id="user-name" name="username" placeholder='User name' required></input><br></br>
          <label htmlFor="email-address">Email Address:</label>
          <input type="text" id="email-address" name='emailaddress' placeholder='Email Address' required></input><br></br>
          <label htmlFor="pass-word">Password:</label>
          <input type='password' id='pass-word' name='password' placeholder='Password' required></input><br></br>
          <button type ='submit'>Sign Up</button>


        </fieldset>
      </form>

    </div>

    </>
  )
}

export default SignUp
