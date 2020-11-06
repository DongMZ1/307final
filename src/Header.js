import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/header.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl} from "react-bootstrap";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl } from "react-bootstrap";

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
            <div
              class="container-fluid"
              style={{ backgroundColor: "rgba(212, 57, 57, 0.726)", padding: "20px", marginTop: "100px"}}
            >
              <div class="row">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6">
                      <div className="logo"></div>
                    </div>
                    <div class="col-lg-3"></div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                      <Navbar className="customized-nav" bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            {/*Prospective*/}
                            <NavDropdown
                              title="Prospective"
                              id="basic-nav-dropdown"
                            >
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
                            <Button variant="outline-danger">Search</Button>
                          </Form>
                        </Navbar.Collapse>
                      </Navbar>
                    </div>
                    <div class="col-lg-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
