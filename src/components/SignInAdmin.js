import React from 'react'
import {Link, Outlet } from 'react-router-dom'

function SignInAdmin() {
  return (
    <div>
        
        <nav className='row'>
            <div><img src="https://dev.pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png" alt=""></img></div>
            <div><button className='childbutton'><Link to ="Dashboard">Dashboard</Link></button></div>
            <div><button className='childbutton'><Link to ="Manage">Manage</Link></button></div>
            <div><button className='childbutton'><Link to ="Reports">Reports</Link></button></div>
            <div><button className='childbutton'><Link to ="Settings">Settings</Link></button></div>
            <div><button className='childbutton'><Link to = 'PulseAdmin'>Pulse Admin</Link></button></div>
        </nav>

      <Outlet/>

    </div>
  )
}

export default SignInAdmin