import React from "react"
import {Link} from 'react-router-dom'
import './Style.css'
export default class Navigation extends React.Component{
    render(){
        return (
        <div className="abhi"> 
 
      
     
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/comp">
          <li>Companies</li>
        </Link>
        
          <Link to="/cont">
            <li>contact</li>
          </Link>
          <Link to="/brows">
            <li>browser</li>
          </Link>
          <Link to="/signin">
            <li>signin</li>
          </Link>

     
      
    
    </div>);
    }
}