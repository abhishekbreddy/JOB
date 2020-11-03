import React from 'react'
import '/home/abhi/Desktop/capstone1/job/src/Components/Pstyle.css'
export default class Myprofilestudent extends React.Component{
    state = { 
  
        // Initially, no file is selected 
        selectedFile: null
      }; 
       
      // On file select (from the pop up) 
      onFileChange = event => { 
       
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
       
      }; 
       
      // On file upload (click the upload button) 
      onFileUpload = () => { 
       
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
        }

        //onSubmit(){
        //axios.post("api/uploadfile", formData); 
      
        
    render(){
        return(<div className="Information"><form><label className="title">
            Fullname: </label >
            <input/> <br></br><label className="title">
            Schoolname: </label>
            <input className= "text"/><br></br><label className="title">
            Collegename: </label>
            <input className= "text"/> <br></br><label className="title">
            Mobilenumber:</label>
            <input className= "text"/><br></br><label className="title">
            Emailid:</label>
            <input className= "text"/><br></br><label className="title">
             College id:</label>
                <input type="file" onChange={this.onFileChange}  /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> <br></br>
                <label  className="title">
            Certificate:</label>
                <input type="file" onChange={this.onFileChange} /> 
                <button > 
                  Upload! 
                </button> <br></br>
                
                <button >Submit</button>
         
        
            </form>
            </div>);
    }
}