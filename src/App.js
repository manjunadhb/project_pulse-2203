
import React from 'react'
import './App.css';

import {Route, Routes} from "react-router-dom";
import Login from './components/Login';
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import SignInStudent from './components/SignInStudent';
import ForgetPassword from "./components/ForgetPassword";
import Home from './components/Home';
import DailyStatusUpdate from './components/DailyStatusUpdate';
import Tasks from './components/Tasks';
import StudentMessages from './components/StudentMessages';
import CreateARequest from './components/CreateARequest';
import ApplyLeave from './components/ApplyLeave';
import Curriculum from './components/Curriculum';
import StudentID from './components/StudentID';
import LogOut from "./components/LogOut";
import CreateAnAccount from './components/CreateAnAccount';
import SignInAdmin from './components/SignInAdmin';
import Dashboard from "./components/Dashboard";
import Manage from "./components/Manage";
import AdminLogOut from './components/AdminLogOut';
import Settings from "./components/Settings";
import PulseAdmin from './components/PulseAdmin';
import Reports from "./components/Reports";
import Rankings from './components/Rankings';
import FeeReport from "./components/FeeReport";
import BatchesSummary from "./components/BatchesSummary";
import Requests from "./components/Requests";
import AdminMessages from "./components/AdminMessages";
import ManageTasks from "./components/ManageTasks";
import ManageUsers from "./components/ManageUsers"; 
import Presentation from './components/Presentation';
import TaskReview from './components/TaskReview';
import CreateTask from './components/CreateTask';
import ClassroomAttendance from './components/ClassroomAttendance';
import IndividualStudent from "./components/IndividualStudent";
import Batch from "./components/Batch";
import Custom from "./components/Custom";
import Attendance from "./components/Attendance";
import Fee from "./components/Fee";
import Communication from "./components/Communication";
import StudentsList from "./components/StudentsList";
import Ticket from "./components/Ticket";
import Enquiry from "./components/Enquiry";
import Assignments from "./components/Assignments";
import Student from "./components/Student";
import Batches from "./components/Batches";
import Holiday from "./components/Holiday";
import Course from "./components/Course";
import AppSearchSync from "./components/AppSearchSync";
import Employee from "./components/Employee";
import FeeReceipt from "./components/FeeReceipt";
import NewFeeReceipt from "./components/NewFeeReceipt";
import AdminTask from "./components/AdminTask";
import Poll from "./components/Poll";
import Notice from "./components/Notice";

function App() {
  return (
    
    <>
    <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='AdminLogin' element={<AdminLogin/>}></Route>
        <Route path='CreateAnAccount' element={<CreateAnAccount/>}></Route>
        <Route path='SignInAdmin' element={<SignInAdmin/>}>
            <Route path='Dashboard' element={<Dashboard/>}>
              <Route path='Rankings' element={<Rankings/>}></Route>
              <Route path='FeeReport' element={<FeeReport/>}></Route>
              <Route path='BatchesSummary' element={<BatchesSummary/>}></Route>
              <Route path='Requests' element={<Requests/>}></Route>
              <Route path='AdminMessages' element={<AdminMessages/>}></Route>
              <Route path='ManageTasks' element={<ManageTasks/>}>
                  <Route path='Presentation' element={<Presentation/>}></Route>
                  <Route path='TaskReview' element={<TaskReview/>}></Route>
                  <Route path='CreateTask' element={<CreateTask/>}></Route>
                  <Route path='ClassroomAttendance' element={<ClassroomAttendance/>}></Route>
              </Route>
              <Route path='ManageUsers' element={<ManageUsers/>}></Route>
            </Route>
            <Route path='Manage' element={<Manage/>}>
              <Route path='Student' element={<Student/>}></Route>
              <Route path='Batches' element={<Batches/>}></Route>
              <Route path='Holiday' element={<Holiday/>}></Route>
              <Route path='Course' element={<Course/>}></Route>
              <Route path='AppSearchSync' element={<AppSearchSync/>}></Route>
              <Route path='Employee' element={<Employee/>}></Route>
              <Route path='FeeReceipt' element={<FeeReceipt/>}></Route>
              <Route path='NewFeeReceipt' element={<NewFeeReceipt/>}></Route>
              <Route path='AdminTask' element={<AdminTask/>}></Route>
              <Route path='Enquiry' element={<Enquiry/>}></Route>
              <Route path='Poll' element={<Poll/>}></Route>
              <Route path='Notice' element={<Notice/>}></Route>
            </Route>
            <Route path='Reports' element={<Reports/>}>
              <Route path='IndividualStudent' element={<IndividualStudent/>}></Route>
              <Route path='Batch' element={<Batch/>}></Route>
              <Route path='Custom' element={<Custom/>}></Route>
              <Route path='Attendance' element={<Attendance/>}></Route>
              <Route path='Fee' element={<Fee/>}></Route>
              <Route path='Communication' element={<Communication/>}></Route>
              <Route path='StudentsList' element={<StudentsList/>}></Route>
              <Route path='Ticket' element={<Ticket/>}></Route>
              <Route path='Enquiry' element={<Enquiry/>}></Route>
              <Route path='Assignments' element={<Assignments/>}></Route>
            </Route>
            <Route path='Settings' element={<Settings/>}></Route>
            <Route path='PulseAdmin' element={<PulseAdmin/>}>
              <Route path='AdminLogOut' element={<AdminLogOut/>}></Route>
            </Route>
        </Route>
        <Route path='ForgetPassword' element={<ForgetPassword/>}></Route>

        <Route path='StudentLogin' element={<StudentLogin/>}></Route>
        <Route path='CreateAnAccount' element={<CreateAnAccount/>}></Route>
        <Route path='SignInStudent' element={<SignInStudent/>}>
            <Route path='Home' element={<Home/>}></Route>
            <Route path='DailyStatusUpdate' element={<DailyStatusUpdate/>}></Route>
            <Route path='Tasks' element={<Tasks/>}></Route>
            <Route path='StudentMessages' element={<StudentMessages/>}></Route>
            <Route path='CreateARequest' element={<CreateARequest/>}></Route>
            <Route path='ApplyLeave' element={<ApplyLeave/>}></Route>
            <Route path='Curriculum' element={<Curriculum/>}></Route>
            <Route path='StudentID' element={<StudentID/>}>
                <Route path='LogOut' element={<LogOut/>}></Route>
            </Route>
        </Route>
        <Route path='ForgetPassword' element={<ForgetPassword/>}></Route>
    </Routes>
    </>  
  );
};

export default App;
