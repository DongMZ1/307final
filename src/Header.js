import React, { Component } from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/header.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import brain from "./pictures/brain.gif";

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
              style={{ padding: "20px", marginTop: "10px" }}
            >
              <div class="row">
                <div class="container">
                  <div class="row">
                      <Navbar className="customized-nav" bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            {/*Home*/}
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

                            {/*academic */}
                            <NavDropdown title="Academic" id="AcademicButton">
                              <NavDropdown.Item href="/Academic/AcademicUndergrad">
                                Undergraduate
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Academic/AcademicGrad">
                                Graduate
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Academic/AcademicCourses">
                                Courses
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Academic/AcademicTeachingAss">
                                Teaching Assistance
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Academic/AcademicFunding">
                                Funding
                              </NavDropdown.Item>
                            </NavDropdown>

                            {/*Research */}
                            <NavDropdown title="Research" id="ResearchButton">
                              <NavDropdown.Item href="/Research/ResearchArea">
                                Area
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Research/ResearchTecReport">
                                Tech Report
                              </NavDropdown.Item>
                            </NavDropdown>

                            {/*People */}
                            <NavDropdown title="People" id="PeopleButton">
                              <NavDropdown.Item href="/People/PeopleFaculty">
                                Faculty
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/People/PeopleStaff">
                                Staff
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/People/PeopleCommunity">
                                Community
                              </NavDropdown.Item>
                            </NavDropdown>

                            {/*News */}
                            <NavDropdown title="News" id="news">
                              <NavDropdown.Item href="/News/News">
                                News
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/News/Events">
                                Events
                              </NavDropdown.Item>
                            </NavDropdown>

                            {/*Employment */}
                            <NavDropdown title="Employment" id="">
                              <NavDropdown.Item href="/Employment/EmploymentFaculty">
                                Faculty
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Employment/EmploymentLecturer">
                                Course Lecturer
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Employment/EmploymentPP">
                                Priority Points
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="/Employment/EmploymentResearch">
                                Research
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/Employment/EmploymentStudents">
                                Students
                              </NavDropdown.Item>
                            </NavDropdown>

                            {/*Donate*/}
                            <Nav.Link href="/Donate/Donate">Donate</Nav.Link>

                            {/*about */}
                            <NavDropdown title="About" id="">
                              <NavDropdown.Item href="/About/AboutContacts">
                                Contacts
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/About/AboutFacilities">
                                Facilities
                              </NavDropdown.Item>
                              <NavDropdown.Divider />

                              <NavDropdown.Item href="/About/AboutVF">
                                Visitor Form
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/About/AboutRoomR">
                                Room Reservation
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/About/AboutWebM">
                                WebMail
                              </NavDropdown.Item>
                              <NavDropdown.Divider />

                              <NavDropdown.Item href="/About/AboutInternal">
                                Internal
                              </NavDropdown.Item>
                              <NavDropdown.Divider />

                              <NavDropdown.Item href="/About/AboutTechSupport">
                                Tech Support
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/About/AboutAdminInfor">
                                Admin Information
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
                    <div class="col-lg-1"></div>
                  </div>
                </div>
                <div class="container">
                  <div class="row" style={{ marginRight: "-30px" }}>
                    <div class="col-lg-7">
                      <div className="coverText">
                        <h3>TEXT AREA</h3>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div className="coverImg">
                        <img src={brain} alt="loading..." />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
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
