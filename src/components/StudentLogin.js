import React from 'react'

import {Link} from 'react-router-dom'


function StudentLogin() {
  return (
    <div className='main'>

      <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png" alt=""></img>

      <div className='center'>
          <h1>Sign In</h1>
        
        <nav>
      <table className='adminTable'>
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan="2"><div><input type="text" name="email"  placeholder="Email"></input></div><br></br><div><input type="text" name="password" placeholder="Password"></input></div><br></br><div><button className='mainbutton'><Link to ="/SignInStudent">Login</Link></button><Link to ="/ForgetPassword?">Forget Password</Link></div></td>
          </tr>
          </tbody>
      </table>
          <div><Link to ="/CreateAnAccount">Create an Account</Link></div>
          
      </nav>

      </div>

      <h1>Sign In Student</h1>

      <h2>Create a Login Page</h2>
      <h2>Assign into Nagarani</h2>
      <ul>
        <li>Layout Creation</li>
        <li>Validation</li>
        <li>Send and Recieve Data from Server</li>
        <li>Responsive Layout</li>
      </ul>
          
    </div>
  )
}

export default StudentLogin