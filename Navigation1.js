import React from "react"
import {Link} from 'react-router-dom'
import './Style.css'
export default class Navigation1 extends React.Component{
    render(){
        return (
        <div className="abhi"> 
 
      
     
        <Link to="/student/">
          <li>Home</li>
        </Link>
            
            
        
        <Link to="/Recruiter/Applications">
          <li>Applications</li>
        </Link>
        
          <Link to="/Recruiter/cont">
            <li>contact</li>
          </Link>
          <Link to="/Recruiter/Myprofile">
            <li>Myprofile</li>
          </Link>
          <Link to="/Recruiter/Signin">
            <li>signin</li>
          </Link>
          

     
      
    
    </div>);
    }
}