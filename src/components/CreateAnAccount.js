import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Dropdown} from 'react-bootstrap';


function CreateAnAccount() {
  
  return (
    <div className='loginMajorDiv'>
      <img src='https://dev.pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png' alt=""></img>


      <div className='loginTable'>

<h1>Sign Up</h1>
<p>Enter your name exactly as per your educational certificates.:</p>


<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Name as per certificates'></input> 
</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Choose Gender'></input>
</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Choose Marital Status'></input>
</div>
<div className='loginIndividualDivImg'>
<img src='https://dev.pulse.brninfotech.com/pulse/assets/admin/layout/img/noImage.png' alt=""></img>
</div>
<div className='loginIndividualDivSelect'>
  <button>Select Image</button>
</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Mobile No.'></input>
</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='City/Town'></input>
</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Choose your State'></input>
</div>
<p>Enter your account details below:</p>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Email'></input>

</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Password'></input>

</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='Re-type your password'></input>
</div>
<br></br>
<div> 
  I agree to the Terms of Service & Privacy Policy
</div>

<br></br>

<div className='loginPageBackSubmit'>
<div className='loginPageBack'>
  
 <button><Link to="/">Back</Link></button>


</div>
<div className='loginPageSubmit'>
  <button>Submit</button>
</div>
</div>


</div>

      </div>
  )
}

export default CreateAnAccount