import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Upload() {
  const [values, setValues] = useState({
    register_no: "",
    name: "",
    sub_1: "",
    sub_2: "",
    sub_3: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8081/add_user", values)
      .then((res) => {
        console.log(res);
        setSuccess(true);
        // Reset form fields
        setValues({
          register_no: "",
          name: "",
          sub_1: "",
          sub_2: "",
          sub_3: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to save data. Please try again.");
      });
  }

  return (
    <section className="container">
      <div className="vh-100  d-flex justify-content-center align-items-center">
        <div className="card p-5" style={{ width: "50%" }}>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/home" className="btn btn-success mb-3">
              Home
            </Link>
          </div>
          <h3 className="mb-4">Upload Student Details</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">Data saved successfully.</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="register_no">Register No</label>
              <input
                type="number"
                name="register_no"
                className="form-control"
                required
                value={values.register_no}
                onChange={(e) =>
                  setValues({ ...values, register_no: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="sub_1">Subject 1</label>
              <input
                type="number"
                name="sub_1"
                className="form-control"
                required
                value={values.sub_1}
                onChange={(e) =>
                  setValues({ ...values, sub_1: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="sub_2">Subject 2</label>
              <input
                type="number"
                name="sub_2"
                className="form-control"
                required
                value={values.sub_2}
                onChange={(e) =>
                  setValues({ ...values, sub_2: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="sub_3">Subject 3</label>
              <input
                type="number"
                name="sub_3"
                className="form-control"
                required
                value={values.sub_3}
                onChange={(e) =>
                  setValues({ ...values, sub_3: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Upload;
