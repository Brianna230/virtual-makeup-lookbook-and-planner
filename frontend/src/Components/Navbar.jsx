import React from "react"
import { Link } from "react-router-dom"

function NavBar(){
    return(
           <div className="navBar">
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                            <Link to ="/about">About</Link>
                            <Link to ="/planner">Planner</Link>
                            <Link to ="/signup">Sign Up</Link>
                        </li>
                        
                    </ul>
            </div>
    )
}

export default NavBar