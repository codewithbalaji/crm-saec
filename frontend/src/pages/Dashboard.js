import React from "react";
import "../css/dashboard.css";
import { PiStudentBold } from "react-icons/pi";
import { BiCloudUpload } from "react-icons/bi";
import { PiDatabaseBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = (box) => {
    if(box === '1'){
      navigate('/studentlist');
    }
    else if(box === '2'){
      navigate('/upload');
    }
    else if(box === '3'){
      navigate('/modifydata');
    }
    

    console.log(`You clicked on ${box}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br/>
      <h1>Dashboard</h1>
      <hr/>
      <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Three clickable boxes */}
        <div className="box" onClick={() => handleClick("1")}>
          <button className="btn btn-d"><PiStudentBold size={70} /><hr/><span className="box-head">Student List</span></button>
        </div>
        <div className="box" onClick={() => handleClick("2")}>
          <button className="btn  btn-d"><BiCloudUpload size={70} /><hr/><span className="box-head">Upload Data</span></button>
        </div>
        <div className="box" onClick={() => handleClick("3")}>
          <button className="btn  btn-d"><PiDatabaseBold size={70} /><hr/><span className="box-head">Modify Data</span></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
