import React from "react";
import "../css/dashboard.css";
import { PiUserListBold } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const StudentList = () => {
  const navigate = useNavigate();
  const handleClick = (box) => {
    if(box === '1'){
      navigate('/listofstudents');
    }else if(box === '2'){
    navigate('/slowlearners');

    }
    console.log(`You clicked on ${box}`);
  };

  return (
    <section>
        <Navigation/>
    <div style={{ textAlign: "center" }}>
      <br/>
      <h1>Student List</h1>
      <hr/>
      <div className="container">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* Three clickable boxes */}
        <div className="box" onClick={() => handleClick("1")}>
          <button className="btn btn-d"><PiUserListBold size={70} /><hr/><span className="box-head">List Of Students</span></button>
        </div>
        <div className="box" onClick={() => handleClick("2")}>
          <button className="btn  btn-d"><PiStudentFill size={70} /><hr/><span className="box-head">List Of Slow Learners</span></button>
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default StudentList;
