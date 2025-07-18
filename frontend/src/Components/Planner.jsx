
import React,{useState,useEffect,useRef} from "react"
import PlannerSubmit from "../../../backend/models/Planner"

function Planner(){
    // const[data, setData] = useState([])
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const response = await fetch('',{
    //             method:'GET',
    //             headers:{
    //                 'x-rapidapi-key': '275f1468f4mshefc33408b964bd2p13d5b3jsnfbce4b3565be',
	// 	            'x-rapidapi-host': 'sephora.p.rapidapi.com'
    //             }
    //         })
    //         const jsonData = await response.json();
    //         setData(jsonData)
    //         console.log(jsonData)

    //     };
    //     fetchData()
    // },[])
    const[plannersubmits, setPlannersubmit] = useState('')
    // const[Plannerinput, setPlannerinput] = useState('')

    async function handleplannerSubmit(e) {
        e.preventDefault()
        const submit ={
            plannerSubmit:plannersubmits
        }
        const response = await fetch('http://localhost:8080/planner',{
            method:'POST',
            body: JSON.stringify(submit),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const newSubmits = await response.json()
        console.log(newSubmits)

        setPlannersubmit([...plannersubmits, newSubmits])
        setPlannersubmit('')
    }

    return(
        <div>
          <form onSubmit={handleplannerSubmit}>
            <div className="container text-center">
                <div className="row">
                    <div className="col" style={{border:"1px solid black",padding:"10%", marginRight:"5%",marginTop:"50px",paddingBottom:"20%", backgroundColor:"white"}}/>

                </div>
            </div>
            <input type="text" name="plannerInput" id="PlannerInput" required value={plannersubmits} onChange={(e)=>setPlannersubmit(e.target.value)}placeholder="Plan your makeup look"/>
            <div className="button-container2">
            <button type="submit" id="PlannerButton"> Submit</button>
            </div>
            </form>
            
           
        </div>
    )
}

export default Planner