import React from 'react'
import Table from 'react-bootstrap/Table'

function FeeReport() {
  return (
    <div>

    <h1>Create a Fee Report Page</h1>
    <h2>Assigned into Chaitanya</h2>

      <ul>
        <li>Send and Recieve data from server</li>
        <li>Populate data in table</li>
        <li>search functionaity in table</li>
        <li>Link to show user dashboard page</li>
        <li>Generate Receipt</li>
      </ul>

      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Total Amount</th>
      <th>First Installment</th>
      <th>Second Installment</th>
      <th>Due Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>chaitanya</td>
      <td>krishna</td>
      <td>@Chaitanyakrishna</td>
      <td>37000</td>
      <td>18500</td>
      <td>18500</td>
      <td>Nill</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>37000</td>
      <td>18500</td>
      <td>18500</td>
      <td>Nill</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
      <td>37000</td>
      <td>18500</td>
      <td>18500</td>
      <td>Nill</td>
    </tr>
  </tbody>
</Table>
    
  </div>
  )
}

export default FeeReport