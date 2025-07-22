
import React,{useState,useEffect,useRef} from "react"
import PlannerSubmit from "../../../backend/models/Planner"
import { useLocation } from "react-router-dom"

function Planner(){
    useEffect(()=>{
        
    })
    const location = useLocation()
    const[plannerSubmit, setPlannersubmit] = useState('')
    // const[Plannerinput, setPlannerinput] = useState('')
    const[plannerData, setPlannerData] = useState([])
    console.log('location', location)

    async function handleplannerSubmit(e) {
        e.preventDefault()
        const submit ={
            plannerSubmit:{plannerSubmit,userId:location.state}
        }
        console.log(submit)
        const response = await fetch('http://localhost:8080/planner',{
            method:'POST',
            body: JSON.stringify(submit),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const newSubmits = await response.json()
        console.log(newSubmits)
        setPlannerData((prev =>[... prev, newSubmits]))
        // setPlannersubmit([...plannersubmits, newSubmits])
        setPlannersubmit('')
    }

  
    useEffect(()=>{
        async function fetchPlannerData(){
        const res = await fetch ('http://localhost:8080/planner') 
        const data = await res.json();
        setPlannerData(data)
            
        }
        fetchPlannerData();
    },[])

  

    return(
        <div>
          <form onSubmit={handleplannerSubmit}>
            <div className="container text-center">
                <div className="row">
                    <div className="col" style={{border:"1px solid black",padding:"10%", marginRight:"5%",marginTop:"50px",paddingBottom:"20%", backgroundColor:"white"}}
                     >
                   {plannerData.map((item, index)=>(
                    <p key={index}>{item.plannerSubmit}</p>
                   ))}
                </div>
            </div>
            </div>
            <input type="text" name="plannerInput" id="PlannerInput" required value={plannerSubmit} onChange={(e)=>setPlannersubmit(e.target.value)}placeholder="Plan your makeup look"/>
            <div className="button-container2">
            <button type="submit" id="PlannerButton"> Submit</button>
            </div>
            </form>
            
           
        </div>
    )
}

export default Planner