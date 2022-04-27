import { Dropdown } from 'bootstrap'
import React from 'react'

function ApplyLeave() {
  return (
   
    <div>  
    <h1>Apply Leave</h1>
    <form className='forms'>
    <div>
        <label>FIRST NAME</label>
        <input type="text"></input>
    </div>
    <div>
        <label>LAST NAME</label>
        <input type="text"></input>
    </div>
    <div>
        <label>EMAIL-ID</label>
        <input type="email"></input>
    </div>
    <div>
        <label>LEAVE TYPE </label>
        <select>
                <option value="#"></option>
                <option value="Sick leave">SICK LEAVE</option>
                <option value="Normal leave">NORMAL LEAVE</option>
                <option selected value="Meternity leave">METERNITY LEAVE</option>
                <option value="Half day leave">HALF DAY LEAVE</option>
        </select>
    </div> 
    <div>
        <label>FROM</label>
        <input type="date"></input>
    </div>
    <div>
        <label>To</label>
        <input type="date"></input>
    </div>
    <button type='submit'>SUBMIT</button>
    <button type='cancel'>CANCEL</button>
    <button type="reset">RESET</button>
    </form>
    </div>



  )}

export default ApplyLeave