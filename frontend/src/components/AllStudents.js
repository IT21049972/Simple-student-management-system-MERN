import React,{useState, useEffect} from "react";
import axios from "axios";

export default function AllStudents(){

    const [students, setStudents] = useState([]);

    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/student").then((res)=>{
                const data = res.data;
               // console.log(res.data);
                setStudents(res.data);

                //setStudents(res)

            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();

    },[])

    return(
        <div className="container">
            <br></br>
<h1><center>All students</center> </h1>
<br></br>

    <table class='table table-bordered'>
    <thead class='thead-dark'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
    {
        
        students.map(student=><tr><td>{student.name}</td><td>{student.age}</td><td>{student.gender}</td></tr>)
    }
    </table>

        </div>
    )
}
