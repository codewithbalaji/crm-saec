import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const [student, setStudent] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8081/get_student/${id}`)
            .then((res) => {
                console.log(res.data)
                setStudent(res.data)
            })
            .catch((err) => console.log(err))
    }, [id]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid vw-100 vh-100 bg-primary">
            <h1>User {id}</h1>
            <Link to="/home" className="btn btn-success">Back</Link>
            <ul className="list-group">
                <li className="list-group-item">
                    <b>ID: </b>
                    {student.id}
                </li>
                <li className="list-group-item">
                    <b>register_no: </b>
                    {student.register_no}
                </li>
                <li className="list-group-item">
                    <b>name: </b>
                    {student.name}
                </li>
                <li className="list-group-item">
                    <b>sub_1: </b>
                    {student.sub_1}
                </li>
                <li className="list-group-item">
                    <b>sub_2: </b>
                    {student.sub_2}
                </li>
            </ul>
        </div>
    )
}

export default Read
