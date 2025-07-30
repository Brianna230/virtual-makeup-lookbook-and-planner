
import React,{useState,useEffect,useRef} from "react"
import { useLocation } from "react-router-dom"

 export const API = import.meta.env.VITE_BASE_API || 'http://localhost:8080';

function Planner(){
    const location = useLocation()
    const[plannerSubmit, setPlannersubmit] = useState('')
    // const[Plannerinput, setPlannerinput] = useState('')
    const[plannerData, setPlannerData] = useState([])
    const[editingId, setEditingId] = useState(null)
    const[editText,setEditingText] = useState("")
    console.log('location', location)

    async function handleplannerSubmit(e) {
        e.preventDefault()
        const submit ={
            plannerSubmit:{plannerSubmit,userId:location.state}
        }
        console.log(submit)
        const response = await fetch(`${API}/planner`,{
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

    async function handleDelete(id) {
        const res =  await fetch(`${API}/planner/${id}`,{
            method:'DELETE',
        })
        if(res.ok){
            setPlannerData(plannerData.filter(item => item._id !== id))
        }
            console.log('Deleting ID:', id);
    console.log("Response status:", res.status);
    }

    async function handleUpdate(id) {
        const res = await fetch (`${API}/planner/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },body: JSON.stringify({plannerSubmit:editText})
        })
        if(res.ok){
            const result = await res.json();
            const updatedItem = result.data
            setPlannerData(prevData => prevData.map(item => item._id === id ? updatedItem : item))
        }
        setEditingId(null)
        setEditingText('')
        
    }


 ;

  
    useEffect(()=>{
        async function fetchPlannerData(){
        if(!location.state) return
        const res = await fetch (`${API}/planner/${location.state}`) 
        const data = await res.json();
        setPlannerData(data)
        console.log(data)
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
                   {plannerData.map((item)=>(
                    <div key={item._id}>
                        {editingId === item._id ?(
                            <>
                            <input type="text" value={editText} onChange={(e)=>setEditingText(e.target.value)} />
                            <button type ="button" id="savebutton"onClick={()=>handleUpdate(item._id)}>Save</button>
                            <button type="button" id="savebutton"onClick={()=>{setEditingId(null); setEditingText('')}}>Cancel</button>
                            </>

                       ) : (
                        <>
                    <p>{item.plannerSubmit}</p>
                    <button type="button" onClick={() => handleDelete(item._id)}>-</button>
                    <button type="button" onClick={() => {setEditingId(item._id);setEditingText(item.plannerSubmit)}}>+</button>
                    </>)}
                    </div>
               
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