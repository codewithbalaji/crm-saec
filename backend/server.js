const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const { check, validationResult } = require("express-validator");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

const db2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "students",
});

/*----------login page---------- */

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (name,email,password) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", [], (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json(errors);
    } else {
      if (err) {
        return res.json("Error");
      }
      if (data.length > 0) {
        return res.json("Success");
      } else {
        return res.json("Fail");
      }
    }
  });
});

/*----------Student list page---------- */

app.post("/add_user", (req, res) => {
  const sql = "INSERT INTO student_details (register_no, name, sub_1, sub_2, sub_3) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.register_no,
    req.body.name,
    req.body.sub_1,
    req.body.sub_2,
    req.body.sub_3,
  ];
  db2.query(sql, values, (err, result) => {
    if (err) return res.json({ message: "Something unexpected has occurred: " + err });
    return res.json({ success: "Student added successfully" });
  });
});

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM student_details";
  db2.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.get("/get_student/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM student_details WHERE `id` = ?";
  db2.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching student details");
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(404).send("Student not found");
      }
    }
  });
});

app.post("/edit_user/:id", (req, res) => {
  const id = req.params.id;
  const sql =
  "UPDATE student_details SET register_no=?, name=?, sub_1=?, sub_2=?, sub_3=? WHERE id=?";
  const values = [
    req.body.register_no,
    req.body.name,
    req.body.sub_1,
    req.body.sub_2,
    req.body.sub_3,
    id,
  ];
  db2.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM student_details WHERE id=?";
  const values = [id];
  db2.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});











app.listen(8081, () => {
  console.log("listening");
});
