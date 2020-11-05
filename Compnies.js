import React, { useState ,useEffect} from 'react'
import Getdata from '/home/abhi/Desktop/capstone1/job/src/Components/Servercall.js'

function Companies(){
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
            <table className="table table-bordered"style={{backgroundColor:'lightblue'}} ><tr><th>id</th><th>username</th></tr>
            {
                info.map((obj,index)=>{
                return(<tr><td>{obj.id}</td>
                <td>{obj.username}</td></tr>)
                })
            }
                
            </table>
    </div>

     ) }
        export default Companies