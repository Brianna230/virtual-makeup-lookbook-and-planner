import React from "react"
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div>
            <ul className="nav navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to ="/">Home</Link>
                            <Link to ="/signup">Sign up</Link>
                        </li>
                        
                    </ul>
                </div>
                <li>
                </li>
                
            </ul>
        </div>
    )
}

export default NavBar