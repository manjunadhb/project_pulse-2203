import React from 'react'

import {Link, Outlet} from "react-router-dom"

function Dashboard() {
  return (
    <div className='Dashboard'>

    <nav className='row'>
          <div><button className='childbutton'><Link to = 'Rankings'>Rankings</Link></button></div>
          <div><button className='childbutton'><Link to = 'FeeReport'>Fee Report</Link></button></div>
          <div><button className='childbutton'><Link to = 'BatchesSummary'>Batches Summary</Link></button></div>
          <div><button className='childbutton'><Link to = 'Requests'>Requests</Link></button></div>
          <div><button className='childbutton'><Link to = 'AdminMessages'>Messages</Link></button></div>
          <div><button className='childbutton'><Link to = 'ManageTasks'>Manage Tasks</Link></button></div>
          <div><button className='childbutton'><Link to = 'ManageUsers'>Manage Users</Link></button></div>
      </nav>

      <Outlet/>

    </div>
  )
}

export default Dashboard