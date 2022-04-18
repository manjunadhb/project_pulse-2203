import React from 'react'
import "react-bootstrap/dist/App.css"

function Holiday() {
  return (
    <div>
      
<h3 className='title'>
			Announce Holiday <small>Announce Holiday</small>
			</h3>
      
    <h1 className='hah'>Home - Announce Holiday</h1>
    
    <h2 className='hd'> Holiday Details</h2>
    

   <table className='tbl'>
  
     
    <label for="holiday">Holiday To*</label>
        <select>
           
            <option value="Select">-Select-</option><br/>
            <option value="India">All</option>
            <option value="India">2203</option>
            </select><br/>
            <label for="holiday Date(s)">Holiday Date(S)*</label>
            
<input type="date" id="holiday date(s)" name="holiday date" title="Total Number of Holidays:
"></input>
<span class="input">till</span>
<input type="date" id="holiday date(s)" name="holiday date" title="Total Number of Holidays:
"></input><br/>
<label for="holiday occassion ">Holiday Occassion*</label>
        <input type="holiday occassion" name="holiday occassion" id="holiday occassion" placeholder="Easter Sunday" title="Please Enter Holiday Occassion"></input><br/>
<label for="holiday description">Holiday Description *</label>
        <input type="holiday description" name="holiday description" id="holidaydescription" placeholder="holiday description" title="Please describe the reason for holiday(s)">
</input>

<div className='div2'>

<button type="submit" class="btn green" id="applyLeave" name="applyLeave">Announce Holiday(s)</button>
<button type="button" class="btn default">Cancel</button>

</div>

  </table>


    
  </div>
  )
}

export default Holiday