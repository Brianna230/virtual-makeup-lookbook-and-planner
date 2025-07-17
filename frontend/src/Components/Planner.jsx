import React,{useState,useEffect} from "react"

function Planner(){
    const[data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
            const jsonData = await response.json();
            setData(jsonData)
            console.log(jsonData)

        };
        fetchData()
    },[])

    return(
        <div>
            
           
        </div>
    )
}

export default Planner