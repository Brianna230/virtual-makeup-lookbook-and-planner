import React from "react";
import SignUp from "./Signup";



function Homepage(){
    return(
        <div>
            <img src="/Makeup.jpg" alt="Makeup photo" className="Makeupphoto" />
            <h3 className="features">Why BeautiMap?</h3>
            <div className="cards">
            <p>Plan your glam occasion or mood</p>
            <p>Save & revisit favorite looks</p>
           </div>
        </div>
    )
}

export default Homepage