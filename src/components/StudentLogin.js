import React from 'react'

import {Link} from 'react-router-dom';


function StudentLogin() {
  return (
    <div className='main'>

      <img src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png" alt=""></img>

        <div className='center'>
          <h1>Sign In</h1>
        
        
        <nav>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td colspan="2"><div>email</div></td>
          </tr>
          <tr>
            <td colspan="2"><div>password</div></td>
          </tr>
          <tr>
            <td><button className='mainbutton'><Link to ="/SignInStudent">Login</Link></button></td>
            <td><Link to ="/ForgetPassword?">Forget Password</Link></td>
          </tr>
          <tr>
            <td colspan="2"><Link to ="/CreateAnAccount">Create an Account</Link></td>
            
          </tr>
        </tbody>
      </table>
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