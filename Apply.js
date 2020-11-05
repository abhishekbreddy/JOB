
import React, { useState ,useEffect} from 'react'
import Getdata from '/home/abhi/Desktop/capstone1/job/src/Components/Servercall.js'

function Apply(){
   useEffect(()=>{
 Getdata().then((res)=>{
     //alert('message')
     setinfo(res.data)
 }


    )
 
 
   },[])
   
   
    const [info,setinfo]=useState([])
    return(
        <div>
            
            {
                info.map((obj,index)=>{
                return(<div className="card"style={{backgroundColor:'lightblue',listStyleType:'none'}}><li>{obj.id}</li>
                <li>{obj.username}</li>
                <button >Apply</button></div>)
                })
            
            } 
           
    </div>

     ) }
        export default Apply