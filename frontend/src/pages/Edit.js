import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const InputField = ({ label, value, onChange, type = "text", required = true }) => (
  <div className="mb-3">
    <label htmlFor={label} className="form-label">{label}</label>
    <input
      value={value}
      type={type}
      className="form-control"
      id={label}
      required={required}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

function Edit() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/get_student/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err)); // Add error handling
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8081/edit_user/${id}`, data);
      navigate("/modifydata");
    } catch (error) {
      console.error(error); // Add error handling
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container vw-100 vh-100 ">
      <h1 className="mt-3">Edit User {id}</h1>
      <Link to="/home" className="btn btn-success mt-3">Back</Link>
      <form onSubmit={handleSubmit} className="mt-3">
        <InputField
          label="Register Number"
          value={data.register_no}
          onChange={(value) => setData({ ...data, register_no: value })}
          type="number"
        />
        <InputField
          label="Name"
          value={data.name}
          onChange={(value) => setData({ ...data, name: value })}
        />
        <InputField
          label="Subject 1"
          value={data.sub_1}
          onChange={(value) => setData({ ...data, sub_1: value })}
          type="number"
        />
        <InputField
          label="Subject 2"
          value={data.sub_2}
          onChange={(value) => setData({ ...data, sub_2: value })}
          type="number"
        />
        <InputField
          label="Subject 3"
          value={data.sub_3}
          onChange={(value) => setData({ ...data, sub_3: value })}
          type="number"
        />

        <button type="submit" className="btn btn-primary mt-3">Save</button>
      </form>
    </div>
  );
}

export default Edit;
