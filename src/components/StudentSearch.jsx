import React from "react";
import { useState } from 'react'
import "./StudentSearch.css"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchStudentDetails } from "../../redux/slices/studentSlice";

const StudentSearch = () => {
    const [rollNo, setRollNo] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!rollNo) {
            alert("Please enter a roll number");
            return
        }
        dispatch(fetchStudentDetails(rollNo));
        navigate(`/dashboard/academics/${rollNo}`);
    }

    return (
        <div className="container">       
            <div className="search-div">
                <div className="student-search">

                    <input type="text"
                        name="rollNo"
                        placeholder="Enter Roll Number"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Search</button>
            </div> 
        </div>
 
    )
}
export default StudentSearch