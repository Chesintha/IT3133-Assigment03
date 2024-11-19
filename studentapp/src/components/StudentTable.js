import '../assests/css/compo.css'
import Profile from './Profile';
import {useState} from "react";

export default function StudentTable(props){
    const [stu,setStu]=useState(props.students[0]);
    return(
        <div className="outerDiv">
            <div className="leftDiv">
                <table border="1">
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.students.map(student=>
                                <tr>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.course}</td>
                                    <td>{student.address.country}</td>
                                    <td><button onClick={()=>{setStu(student)}}>View</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="rightDiv">
                 <profile student={stu}/>
            </div>
        </div>
    );
}