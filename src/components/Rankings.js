import React from "react";

import { Button, Accordion, Container,Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Rankings() {
  return (
    <>
      <Container className="subMenu">
        <span>Report for</span>

        <select className="OptwithSearch">
          <option></option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>
        <Button variant="primary" className="Report">
          Report
        </Button>
      </Container>

      <Container fluid>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <select className="p-2">
                <option>All</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <span>recods</span>

              <input
                type="Search"
                className="search"
                placeholder="Search Here..."
              />
              <span className="search">Search:</span>
              <Table striped bordered hover >
                <thead>
                  <tr>
                    <th >Rank</th>
                    <th >Student Name</th>
                    <th >Student ID</th>
                    <th >Late to Office</th>
                    <th >Min.Hrs Missed</th>
                    <th >Disable Reason</th>
                    <th >Max.Score</th>
                    <th >Score</th>
                    <th >Performance</th>
                    <th >Last Attended</th>
                    <th >Total Days</th>
                    <th >Working Days</th>
                    <th >Leaves</th>
                    <th >Absent</th>
                    <th >Days Attended</th>
                  </tr>
                </thead>
                <tbody>
                <tr >
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                  </tr>

                  <tr >
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                  </tr>  
                  <tr >
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                  </tr>
                </tbody>
              </Table>

              
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <Container fluid>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <select className="p-2">
                <option>All</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <span>Recods</span>

              <input
                type="Search"
                className="search"
                placeholder="Search Here..."
              />
              <span className="search">Search:</span>
              <Table striped bordered hover >
                <thead>
                  <tr>
                    <th >Rank</th>
                    <th >Student Name</th>
                    <th >Student ID</th>
                    <th >Late to Office</th>
                    <th >Min.Hrs Missed</th>
                    <th >Disable Reason</th>
                    <th >Max.Score</th>
                    <th >Score</th>
                    <th >Performance</th>
                    <th >Last Attended</th>
                    <th >Total Days</th>
                    <th >Working Days</th>
                    <th >Leaves</th>
                    <th >Absent</th>
                    <th >Days Attended</th>
                  </tr>
                </thead>
                <tbody>
                <tr >
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                  </tr>

                  <tr >
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                  </tr>  
                  <tr >
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                    <td >DATA</td>
                  </tr>
                </tbody>
              </Table>

              
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default Rankings;
