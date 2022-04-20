import React from 'react'

function Tasks() {
  return (
    <div>
    
  <h1 className='h1class'>Tasks</h1>
  <h3 className='h3class'>Home > Tasks ></h3>

  <div className='tasksDiv'>

<caption className='h2class'>Tasks assigned to you</caption>

<br></br>


<table id='tasksTable1'>
  <thead>
  <tr>
  <th>#</th>
<th>UID</th>
<th>ID</th>
<th>Type</th>
<th>Title</th>
<th>Requirements</th>
<th>Issues</th>
<th>Build to Store</th>
<th>Deadline</th>
<th>Max. File Size</th>
<th>Status</th>
<th>Points Earned</th>
</tr>
</thead>


<tr id='tdTaskTable'>
<td>1</td>
<td>BPT1</td>
<td>81175</td>
<td>Technical Task - Practice (UI and Code)</td>
<td>Intro to HTML</td>
<td>Create task as per requirement</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>No</td>
<td>Before 11:00 am on 16 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>2</td>
<td>BTT2</td>
<td>81187</td>
<td>Technical Task - Theory ()</td>
<td>Intro to HTML</td>
<td>Prepare for interviews on Intro to HTML</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>NA</td>
<td>Before 11:00 am on 16 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>3</td>
<td>BPT3</td>
<td>81175</td>
<td>Technical Task - Practice (UI and Code)</td>
<td>Images, Links, Absolute and Relative Paths	</td>
<td>Create task as per requirement</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>No</td>
<td>Before 11:00 am on 17 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>4</td>
<td>BTT4</td>
<td>81187</td>
<td>Technical Task - Theory ()</td>
<td>Images, Links, Absolute and Relative Paths	</td>
<td>Prepare for interviews on Images, Links, Absolute and Relative Paths</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>NA</td>
<td>Before 11:00 am on 17 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>5</td>
<td>BPT5</td>
<td>81175</td>
<td>Technical Task - Practice (UI and Code)</td>
<td>Bookmark links, pre, VSCExtensions, iFrame</td>
<td>Create task as per requirement</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>No</td>
<td>Before 11:00 am on 18 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>6</td>
<td>BTT6</td>
<td>81187</td>
<td>Technical Task - Theory ()</td>
<td>Bookmark links, pre, VSCExtensions, iFrame	</td>
<td>Prepare for interviews on Bookmark links, pre, VSCExtensions, iFrame</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>NA</td>
<td>Before 11:00 am on 18 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>7</td>
<td>BPT7</td>
<td>81175</td>
<td>Technical Task - Practice (UI and Code)</td>
<td>Inline, Internal, External Styles</td>
<td>Create task as per requirement</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>No</td>
<td>Before 11:00 am on 19 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>8</td>
<td>BTT8</td>
<td>81187</td>
<td>Technical Task - Theory ()</td>
<td>Inline, Internal, External Styles</td>
<td>Prepare for interviews on Inline, Internal, External Styles</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>NA</td>
<td>Before 11:00 am on 19 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>9</td>
<td>BPT9</td>
<td>81175</td>
<td>Technical Task - Practice (UI and Code)</td>
<td>CSS Classes, Selectors</td>
<td>Create task as per requirement</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>No</td>
<td>Before 11:00 am on 20 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>

<tr id='tdTaskTable'>
<td>10</td>
<td>BTT10</td>
<td>81187</td>
<td>Technical Task - Theory ()</td>
<td>CSS Classes, Selectors</td>
<td>Prepare for interviews on CSS Classes, Selectors</td>
<td>Open : 0
Fixed : 0
Closed : 0</td>
<td>NA</td>
<td>Before 11:00 am on 20 March 2022</td>
<td>Not more than 40 MB</td>
<td id='pendingReview'>Review Pending</td>
<td>0/100</td>
</tr>



</table>

<h3 id='taskFoot'>Showing 1 to 10 of 10 entries</h3>


</div>

  </div>
  )
}

export default Tasks