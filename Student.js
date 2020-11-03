import React from 'react'
import Home from '/home/abhi/Desktop/capstone1/job/src/Components/Home.js';

import Navigation from '/home/abhi/Desktop/capstone1/job/src/Components/Navigation/Navigtion.js'
import Companies from '/home/abhi/Desktop/capstone1/job/src/Components/Compnies.js'
import Contact from '/home/abhi/Desktop/capstone1/job/src/Components/Contact.js'
import  Applied from "/home/abhi/Desktop/capstone1/job/src/Components/Applied jobs.js";
import Myprofilestudent from '/home/abhi/Desktop/capstone1/job/src/Components/Myprofilestudent.js'
import Signin from '/home/abhi/Desktop/capstone1/job/src/Components/Signin.js'
import { Route } from 'react-router-dom';

 class Student extends React.Component{
    render (){
        return (<div><Navigation/>
            <Route exact path="/student/"component={Home}/>
            <Route exact path="/student/appliedjobs"component={Applied}/>
            <Route exact path="/student/comp"component={Companies}/>
            <Route exact path="/student/cont" component={Contact}/>
            <Route exact path="/student/Myprofilestudent"component={Myprofilestudent}/>
            <Route exact path="/student/Signin"component={Signin}/>
            </div>)
    }

}
export default Student;