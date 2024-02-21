import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/Signup';
import Home from './pages/Home';
import PrivateRoutes from './components/PrivateRoute';
import StudentList from './pages/StudentList';
import ListOfStudents from './pages/ListOfStudents';
import Upload from './pages/Upload';
import SlowLearners from './pages/SlowLearners';
import ModifyData from './pages/ModifyData';
import Read from './pages/Read';
import Edit from './pages/Edit';
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/home" element={<Home/>} exact/>
        <Route path="/studentlist" element={<StudentList/>} exact/>
        <Route path="/upload" element={<Upload/>} exact/>
        <Route path="/listofstudents" element={<ListOfStudents/>} exact/>
        <Route path="/slowlearners" element={<SlowLearners/>} exact/>
        <Route path="/modifydata" element={<ModifyData/>} exact/>
        <Route path="/read/:id" element={<Read/>} exact/>
        <Route path="/edit/:id" element={<Edit/>} exact/>
        </Route>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default App;
