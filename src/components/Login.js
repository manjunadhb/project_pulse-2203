import React from 'react'

import {Link} from 'react-router-dom'
function Login() {
  return (
    <div style={{ 
      backgroundImage: 'url("https://revenuesandprofits.com/wp-content/uploads/2020/09/pojmovi-u-web-dizajnu.jpg")', height:"100vh"
    }}>
        

        <table className='mainTable'>
          <thead></thead>
          <tbody>
            <tr>
              <td className='maintd'><img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png" alt=""></img>
</td>
            </tr>
            <tr>
              <td className='maintd'></td>
            </tr>
            <tr>
              <td className='maintd'></td>
            </tr>
            <tr>
              <td className='maintd'></td>
            </tr>
            <tr>
              <td className='maintd'></td>
            </tr>
            <tr>
              <td className='maintd'>
              <nav>
            <div className='maindiv'><button className='mainbutton'><Link to ="AdminLogin">Admin Login</Link></button></div>
            <div className='maindiv'><button className='mainbutton'><Link to ="StudentLogin">Student Login</Link></button></div>
        </nav>
              </td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}

export default Login