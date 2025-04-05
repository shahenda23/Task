import { useState } from "react"
import "./Department.css";


function Department (){
    const [Depart , setNumOfStudents]=useState ({
        DepartmentName:"GIS" ,
        NoOfStudents : 16,
        Courses: ["C#","ReAct" , "HTML" , "Mapping" ]
    })

    const handleIncrement=()=>{
        setNumOfStudents((prevDepart)=> ({
            ...prevDepart,
            NoOfStudents :prevDepart. NoOfStudents+1
        }))
    }
    const ResetIncrement=()=>{
        setNumOfStudents((prevDepart)=> ({
            ...prevDepart,
            NoOfStudents :16
        }))
    }

    return(
        <>
        <div className="department-container">
         <h5>From Function</h5>
         <h2>Dapartment: {Depart.DepartmentName}</h2>
         <h3>Students Number:{Depart.NoOfStudents}</h3>
         <button onClick={handleIncrement} className="increment-button">Increment</button>
         <button onClick={ResetIncrement} className="increment-button">Reset</button>
         <h3>Courses:</h3>
            <ul>
                {Depart.Courses.map((course, index) => (
                <li key={index}>{course}</li>
                ))}
            </ul>
         </div>
        </>
    )
}
export default Department