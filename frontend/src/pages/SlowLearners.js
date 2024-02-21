import Navigation from '../components/Navigation'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SlowLearners() {
    const [slowLearners, setSlowLearners] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/students')
            .then((res) => {
                const slowLearnersData = res.data.filter(student => {
                    return student.sub_1 < 50 || student.sub_2 < 50 || student.sub_3 < 50;
                });
                setSlowLearners(slowLearnersData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section>
            <Navigation />
            <br />
            <h2 className='d-flex justify-content-center'>Slow Learners</h2>
            <div className='container bg-light vh-100'>
                <div className='d-flex justify-content-end mb-3'>
                    <Link className='btn btn-success' to='/home'>Back</Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Register No</th>
                            <th>Name</th>
                            <th>Subjects</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slowLearners.map((student, index) => (
                            <tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.register_no}</td>
                                <td>{student.name}</td>
                                <td>
                                    {student.sub_1 < 50 ? <span className="badge bg-danger me-1">Subject 1</span> : null}
                                    {student.sub_2 < 50 ? <span className="badge bg-danger me-1">Subject 2</span> : null}
                                    {student.sub_3 < 50 ? <span className="badge bg-danger me-1">Subject 3</span> : null}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default SlowLearners;
