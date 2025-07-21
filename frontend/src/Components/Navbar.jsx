import React from "react"
import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar(){
    return(
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                            </li>
                            <li>
                            <Link to ="/about">About</Link>
                            </li>
                            <li>
                            <Link to ="/planner">Planner</Link>
                            </li>
                            <li className={styles.signupnavBar}> 
                            <Link to  ="/signup">Sign Up</Link>
                            <Link to ="/login">Login</Link>
                            </li>

                        
                    </ul>
    )
}

export default NavBar