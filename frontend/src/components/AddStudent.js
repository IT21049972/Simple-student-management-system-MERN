import React,{useState} from "react";
import axios from "axios";

export default function AddStudent(){

  const [name, setName]=useState("");
  const [age, setAge]=useState("");
  const [gender, setGender]=useState("");

  function sendData(e){
    e.preventDefault();
    //alert("hi");

    const newStudent ={

      name,
      age,
      gender

    }
    axios.post('http://localhost:8070/student/add',newStudent).then(()=>{
      alert("Student added");
      setName("");
      setAge("");
      setGender("");
      
    }).catch((err)=>{
      alert(err);
    })

   // console.log(newStudent);
  }

    return(
        <div className="container" align="left">

        <form onSubmit={sendData}>
          <div class="form-group">
            <br></br>
            <label for="name">Student name</label>
            <input type="text" class="form-control" id="name"  placeholder="Enter student name" onChange={(e)=>{
              setName(e.target.value);
            }}/>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age"  placeholder="Enter student age" onChange={(e)=>{
              setAge(e.target.value);
            }}/>
          </div> 
           <div class="form-group">
            <label for="gender">Gender</label>
            <input type="text" class="form-control" id="gender"  placeholder="Enter student gender" onChange={(e)=>{
              setGender(e.target.value);
            }}/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}