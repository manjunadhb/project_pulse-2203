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
<select className='loginIndividualDivInput'>

<option>Choose Gender</option>
<option>Male</option>
<option>Female</option>

</select>
</div>
<div className='loginIndividualDiv'>
<select className='loginIndividualDivInput'>

<option>Choose Marital Status</option>
<option>Married</option>
<option>Unmarried</option>

</select>
</div>
<div className='loginIndividualDivImg'>
<img src='https://dev.pulse.brninfotech.com/pulse/assets/admin/layout/img/noImage.png' alt=""></img>
</div>
<div className='loginIndividualDivSelect'>
  <input type="file"></input>
</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="number" placeholder='Mobile No.'></input>
</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="text" placeholder='City/Town'></input>
</div>
<div className='loginIndividualDiv'>
<select className='loginIndividualDivInput'>

<option>Choose your State</option>
    <option>Andhra Pradesh</option>
<option>Arunachal Pradesh</option>
<option>Assam</option>
<option>Bihar</option>
<option>Chhattisgarh</option>
<option>Goa</option>
<option>Gujarat</option>
<option>Haryana</option>
<option>Himachal Pradesh</option>
<option>Jharkhand</option>
<option>Karnataka</option>
<option>Kerala</option>
<option>Madhya Pradesh</option>
<option>Maharashtra</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Mizoram</option>
<option>Nagaland</option>
<option>Odisha</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Sikkim</option>
<option>Tamil Nadu</option>
<option>Telangana</option>
<option>Tripura</option>
<option>Uttar Pradesh</option>
<option>Uttarakhand</option>
<option>West Bengal</option>
</select>

</div>
<p>Enter your account details below:</p>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="email" placeholder='Email'></input>

</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="password" placeholder='Password'></input>

</div>
<div className='loginIndividualDiv'>
<input className='loginIndividualDivInput' type="password" placeholder='Re-type your password'></input>
</div>
<br></br>
<div> 
  <input type="checkbox"></input>
  <lable>I agree to the Terms of Service & Privacy Policy</lable>
</div>

<br></br>

<div className='loginPageBackSubmit'>
<div className='loginPageBack'>
  
 <button><Link to="/">Back</Link></button>


</div>
<div className='loginPageSubmit'>
<input type="submit" value="Submit"></input>
</div>
</div>


</div>

      </div>
  )
}

export default CreateAnAccount