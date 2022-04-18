import React from 'react'

import {Link, Outlet} from 'react-router-dom'

function ManageTasks() {
  return (
    <div>

      <nav className='row'>

        <div><button className='childbutton'><Link to ="Presentation">Presentation</Link></button></div>
        <div><button className='childbutton'><Link to ="TaskReview">Task Review</Link></button></div>
        <div><button className='childbutton'><Link to ="CreateTask">Create Task</Link></button></div>
        <div><button className='childbutton'><Link to ="ClassroomAttendance">Classroom Attendance</Link></button></div>

      </nav>

      <Outlet/>
    </div>
  )
}

export default ManageTasks