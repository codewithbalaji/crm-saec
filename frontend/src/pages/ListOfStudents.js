import Navigation from '../components/Navigation'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListOfStudents() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/students')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

  return (
    <section>
      <Navigation/>
      <br/>
      <h2 className='d-flex justify-content-center'>List Of Students</h2>
      <div className='container bg-light vh-100 '>
        <div className='d-flex justify-content-end mb-3'>
            <Link className='btn btn-success' to='/home'>Back</Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Register No</th>
                    <th>Name</th>
                    <th>Subject 1</th>
                    <th>Subject 2</th>
                    <th>Subject 3</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.register_no}</td>
                        <td>{student.name}</td>
                        <td>{student.sub_1}</td>
                        <td>{student.sub_2}</td>
                        <td>{student.sub_3}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </section>
  )
}

export default ListOfStudents
