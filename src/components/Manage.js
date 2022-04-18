import React from 'react'

import {Link, Outlet} from "react-router-dom"

function Manage() {
  return (
    <div className='Manage'>

      <nav className='row'>
        
          <div><button className='childbutton'><Link to = 'Student'>Student</Link></button></div>
          <div><button className='childbutton'><Link to = 'Batches'>Batches</Link></button></div>
          <div><button className='childbutton'><Link to = 'Holiday'>Holiday</Link></button></div>
          <div><button className='childbutton'><Link to = 'Course'>Course</Link></button></div>
          <div><button className='childbutton'><Link to = 'AppSearchSync'>AppSearchSync</Link></button></div>
          <div><button className='childbutton'><Link to = 'Employee'>Employee</Link></button></div>
          <div><button className='childbutton'><Link to = 'FeeReceipt'>Fee Receipt</Link></button></div>
          <div><button className='childbutton'><Link to = 'NewFeeReceipt'>New Fee Receipt</Link></button></div>
          <div><button className='childbutton'><Link to = 'AdminTask'>Task</Link></button></div>
          <div><button className='childbutton'><Link to = 'Enquiry'>Enquiry</Link></button></div>
          <div><button className='childbutton'><Link to = 'Poll'>Poll</Link></button></div>
          <div><button className='childbutton'><Link to = 'Notice'>Notice</Link></button></div>
      </nav>

      <Outlet/>


    </div>
  )
}

export default Manage