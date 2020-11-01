import React from 'react'
export default class Signin extends React.Component{
    
    constructor(){
        super()
        this.state={
            username:"",
            password :""
        }}

        handlechange=()=>{
            this.setState={
                username :"",
                 password :"" ,
                error :""                              }
        }

        login=()=>{
            let username,password
            let loggedin=this.setState({username:"",password:""})
            if (!username||!password){
                this.setState({error :"fill the details"});
            }
            else if(!loggedin){
                    this.setState({error:"entercorrectdetails"})               
            } 
        }
    render(){
        return(<div><input style={{justifyContent:"space-around",backgroundColor:"grey",fontWeight:"bold" ,width:'200px',
        margin:'auto'}}/><input style={{justifyContent:"space-around",backgroundColor:"grey",fontWeight:"bold",width:'200px',
        margin:'auto'}}/></div>)
    }
}