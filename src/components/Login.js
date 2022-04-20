import React from 'react'

import {Link} from 'react-router-dom'
function Login() {
  return (
    <div style={{ 
      backgroundImage: 'url("https://revenuesandprofits.com/wp-content/uploads/2020/09/pojmovi-u-web-dizajnu.jpg")', height:"100vh"
    }}>
        
        <nav>
        <table className='mainTable'>
          <thead></thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
              <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png" alt=""></img>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
              <div className='maindiv'><button className='mainbutton'><Link to ="AdminLogin">Admin Login</Link></button></div>
              <br/>
              <div className='maindiv'><button className='mainbutton'><Link to ="StudentLogin">Student Login</Link></button></div>
              </td>
            </tr>
          </tbody>
        </table>
        </nav>
              
    </div>
  )
}

export default Login