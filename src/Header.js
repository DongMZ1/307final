import React, { Component } from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/header.css";
import { Spring } from "react-spring/renderprops";
import { FaSchool } from "react-icons/fa";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
import brain from "./pictures/brain.gif";
import logo from "./pictures/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = { 
      dropdownPerspective: false,
      dropdownAcademic: false,
      dropdownResearch: false,
      dropdownPeople: false, 
      dropdownNews: false,
      dropdownEmployment: false, 
      dropdownAbout: false, 
      dropdownAccount: false
    };
  }

  toggle(menuItem) {
    // this.setState(prevState => ({
    //   show: !prevState.show
    // }));
    this.setState({[menuItem]: !this.state[menuItem]})
  }

  onMouseEnter(menuItem) {
    // this.setState({show: true});
    this.setState({[menuItem]: true})
  }

  onMouseLeave(menuItem) {
    this.setState({[menuItem]: false})
  }

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <Navbar className="customized-nav" bg="light" expand="lg">
            {/* <div className="logo"></div> */}
            <Navbar.Brand>
 
          <img src={logo} style={{width:200, marginTop: -7}} />
       
        </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  {/*Home*/}
                  <Nav.Link href="/" id="btn-link">Home</Nav.Link>
                  {/*Prospective*/}
                  <NavDropdown title="Prospective" id="basic-nav-dropdown" onMouseOver={this.onMouseEnter.bind(this, 'dropdownPerspective')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownPerspective')} show={this.state.dropdownPerspective} toggle={this.toggle.bind(this, 'dropdownPerspective')}>
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
                  <NavDropdown title="Academic" id="AcademicButton" onMouseOver={this.onMouseEnter.bind(this, 'dropdownAcademic')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownAcademic')} show={this.state.dropdownAcademic} toggle={this.toggle.bind(this, 'dropdownAcademic')}>
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
                  <NavDropdown title="Research" id="ResearchButton" onMouseOver={this.onMouseEnter.bind(this, 'dropdownResearch')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownResearch')} show={this.state.dropdownResearch} toggle={this.toggle.bind(this, 'dropdownResearch')}>
                    <NavDropdown.Item href="/Research/ResearchArea">
                      Area
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Research/ResearchTecReport">
                      Tech Report
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/*People */}
                  <NavDropdown title="People" id="PeopleButton" onMouseOver={this.onMouseEnter.bind(this, 'dropdownPeople')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownPeople')} show={this.state.dropdownPeople} toggle={this.toggle.bind(this, 'dropdownPeople')}>
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
                  <NavDropdown title="News" id="news" onMouseOver={this.onMouseEnter.bind(this, 'dropdownNews')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownNews')} show={this.state.dropdownNews} toggle={this.toggle.bind(this, 'dropdownNews')}>
                    <NavDropdown.Item href="/News/News">News</NavDropdown.Item>
                    <NavDropdown.Item href="/News/Events">
                      Events
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/*Employment */}
                  <NavDropdown title="Employment" id="" onMouseOver={this.onMouseEnter.bind(this, 'dropdownEmployment')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownEmployment')} show={this.state.dropdownEmployment} toggle={this.toggle.bind(this, 'dropdownEmployment')}>
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
                  <Nav.Link href="/Donate/Donate" id="btn-link">Donate</Nav.Link>

                  {/*about */}
                  <NavDropdown title="About" id="" onMouseOver={this.onMouseEnter.bind(this, 'dropdownAbout')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownAbout')} show={this.state.dropdownAbout} toggle={this.toggle.bind(this, 'dropdownAbout')}>
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

                  {/*account*/}
                  <NavDropdown title="Account" id="accountManager" onMouseOver={this.onMouseEnter.bind(this, 'dropdownAccount')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownAccount')} show={this.state.dropdownAccount} toggle={this.toggle.bind(this, 'dropdownAccount')}>
                    <NavDropdown.Item href="">Login</NavDropdown.Item>
                    <NavDropdown.Item href="">Sign Up</NavDropdown.Item>

                    <NavDropdown.Item href="">
                      Account Manage (IT worker only)
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
            <div className="header">
              <div className="headerleft">
                <div
                  class="container-fluid"
                  style={{ padding: "20px", marginTop: "10px" }}
                >
                  <div class="row">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-1"></div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="row" style={{ marginRight: "-30px" }}>
                        <div class="col-lg-7">
                          <div className="coverText">
                            <h3>School of Computer Science</h3>
                            <br />
                            <span
                              style={{ fontFamily: "unset", fontSize: "72px" }}
                            >
                              @ McGill{" "}
                            </span>
                            <FaSchool
                              style={{ fontSize: "72px", marginBottom: "45px" }}
                            ></FaSchool>
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
                      <div class="col-lg-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Header;
