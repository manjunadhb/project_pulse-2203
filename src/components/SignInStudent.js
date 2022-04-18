import React from 'react'

import {Link, Outlet} from 'react-router-dom'

function SignInStudent() {
  return (
    <div>

<nav className='row'>
  <div><img src="https://dev.pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png" alt=""></img></div>
    <div><button className='childbutton'><Link to ="Home">Home</Link></button></div>
    <div><button className='childbutton'><Link to ="DailyStatusUpdate">Daily Status Update</Link></button></div>
    <div><button className='childbutton'><Link to ="Tasks">Tasks</Link></button></div>
    <div><button className='childbutton'><Link to ="StudentMessages">Messages</Link></button></div>
    <div><button className='childbutton'><Link to ="CreateARequest">Create a Request</Link></button></div>
    <div><button className='childbutton'><Link to ="ApplyLeave">Apply Leave</Link></button></div>
    <div><button className='childbutton'><Link to ="Curriculum">Curriculum</Link></button></div>
    <div><button className='childbutton'><Link to ="StudentID">StudentID</Link></button></div>
</nav>

<Outlet/>
      

    </div>
  )
}

export default SignInStudent