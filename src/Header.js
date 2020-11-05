import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/header.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl} from "react-bootstrap";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      <div className="header">
        <div className="headerleft">
          {/* <h1 style={{ textDecoration: "underline", fontSize: "50px" }}> */}
          {/* <h1 style={{ borderBottom: "1px dotted white", fontSize: "50px" }}> */}
          <h1> McGill University </h1>
          <h2> School of Computer Science </h2>
        </div>
        </div>
          <div className="react-navbar">
            <Navbar bg="light" expand="lg">
              {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  {/*Prospective*/}
                  <NavDropdown title="Prospective" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveGeneralInfo">
                      General Info
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveWhyCS">
                      Why CS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveCEGEP">
                      CEGEP
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveFreshman">
                      Freshman
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveChoosingAMajor">
                      Choosing A Major
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveTransfer">
                      Transfer
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveInternship">
                      Internship
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/ProspectivePages/ProspectiveUndergrad">
                      Undergrad addmission
                    </NavDropdown.Item>
                    <NavDropdown.Item href="ProspectiveGrad">
                      Grad addmission
                    </NavDropdown.Item>
                  </NavDropdown>






                  <Nav.Link href="/ProspectivePages/ProspectiveGeneralInfo">Perspective Overview</Nav.Link>
                  <Nav.Link href="/Academic/AcademicOverview">Academic</Nav.Link>


                  {/*about */} 
                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>


                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-primary">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
      </div>
      </div>
    );
  }
}

export default Header;
