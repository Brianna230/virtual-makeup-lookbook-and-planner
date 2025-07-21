import React from "react";

function Login(){
    return(

        <div className="loginform">
     <form>
       <fieldset>
         <h2>Login</h2>
          <label htmlFor= "user-name">User Name:</label>
          <input type="text" id="user-name" name="username" required></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required></input>
          <div className='button-container'>
          <button type ='submit'>Sign Up</button>
          </div>
        </fieldset>
     </form>

        </div>
    )
}

export default Login