import React from 'react'

import {Link, Outlet} from "react-router-dom"

function Reports() {
  return (
    <div className='Reports'>

    <nav className='row'>

          <div><button className='childbutton'><Link to = 'IndividualStudent'>Individual Student</Link></button></div>
          <div><button className='childbutton'><Link to = 'Batch'>Batch</Link></button></div>
          <div><button className='childbutton'><Link to = 'Custom'>Custom</Link></button></div>
          <div><button className='childbutton'><Link to = 'Attendance'>Attendance</Link></button></div>
          <div><button className='childbutton'><Link to = 'Fee'>Fee</Link></button></div>
          <div><button className='childbutton'><Link to = 'Communication'>Communication</Link></button></div>
          <div><button className='childbutton'><Link to = 'StudentsList'>Students List</Link></button></div>
          <div><button className='childbutton'><Link to = 'Ticket'>Ticket</Link></button></div>
          <div><button className='childbutton'><Link to = 'Enquiry'>Enquiry</Link></button></div>
          <div><button className='childbutton'><Link to = 'Assignments'>Assignments</Link></button></div>
      </nav>

      <Outlet/>

    </div>
  )
}

export default Reports