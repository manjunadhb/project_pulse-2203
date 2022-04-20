import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap';


function CreateAnAccount() {
  
  return (
    <div id='loginMajorDiv'>
      <img src='https://dev.pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png' alt=""></img>


      <div id='loginTable'>

<h1>Sign Up</h1>
<p>Enter your name exactly as per your educational certificates.:</p>


<div id='loginIndividualDiv' >
Name as per certificates
</div>
<div id='loginIndividualDiv'>
Choose Gender
</div>
<div id='loginIndividualDiv'>
Choose Marital Status
</div>
<div id='loginIndividualDivImg'>
<img src='https://dev.pulse.brninfotech.com/pulse/assets/admin/layout/img/noImage.png' alt=""></img>
</div>
<div id='loginIndividualDivSelect'>
Select image
</div>
<div id='loginIndividualDiv'>
Mobile No.
</div>
<div id='loginIndividualDiv'>
City/Town
</div>
<div id='loginIndividualDiv'>
Choose your State
</div>
<p>Enter your account details below:</p>
<div id='loginIndividualDiv'>
Email
</div>
<div id='loginIndividualDiv'>
Password
</div>
<div id='loginIndividualDiv'>
Re-type your password
</div>
<br></br>
<div> 
  I agree to the Terms of Service & Privacy Policy
</div>

<br></br>

<div id='loginPageBackSubmit'>
<div id='loginPageBack'>
  
 <button><Link to="StudentLogin">Back</Link></button>


</div>
<div id='loginPageSubmit'>
  Submit
</div>
</div>


</div>

      </div>
  )
}

export default CreateAnAccount