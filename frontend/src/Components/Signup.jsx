import { useState } from 'react'


function SignUp() {

  return (
    <>
    <div className='title'>
    <h1>Virtual Makeup lookbook and planner</h1>
    </div>
    <div className='SignUpform'>
      <form>
        <fieldset>
          <h2>Sign Up</h2>
          <label for = "user-name">User Name:</label>
          <input type="text" id="user-name" name="username" placeholder='User name' required></input><br></br>
          <label for="email-address">Email Address:</label>
          <input type="text" id="email-address" name='emailaddress' placeholder='Email Address' required></input><br></br>
          <label for="pass-word">Password:</label>
          <input type='password' id='pass-word' name='password' placeholder='Password' required></input><br></br>
          <button>Sign Up</button>


        </fieldset>
      </form>

    </div>

    </>
  )
}

export default SignUp
