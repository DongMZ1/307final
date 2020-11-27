import React, { Component } from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/header.css";
import { Spring } from "react-spring/renderprops";
import { FaSchool } from "react-icons/fa";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
import brain from "./pictures/brain.gif";
import logo from "./pictures/logo.png";
import Modal from "react-modal";
import "./static/Modal.css";

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
      dropdownAccount: false,
      sign: false,
      login: false,
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

  onOpenModal = () => {
    this.setState({ sign: true });
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onCloseModalclose = () => {
    this.setState({ login: false });
  };

  render() {
    const { login, sign } = this.state;
    return (
      <>
        <div>
          <div className="header">
            <div className="headerleft">
              <div
                class="container-fluid"
                style={{ backgroundColor: "rgba(212, 57, 57, 0.726)", padding: "20px", marginTop: "100px" }}
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
                          <Button variant="outline-danger" id="signup" onClick={this.onOpenModal}>SignUp</Button>
                          <Button variant="outline-danger" id="login" onClick={this.onOpenModalLogin}>Login</Button>

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
        <Modal isOpen={sign}
          onRequestClose={this.onCloseModal}
          shouldCloseOnOverlayClick={true}
          animationType="fade"
          transparent={true}
          visible={this.props.visible}
          style={
            {
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)'
              },
              content: {
                position: 'absolute',
                top: '25%',
                left: '35%',
                right: '35%',
                bottom: '25%',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',

                borderRadius: '4px',
                outline: 'none',

              }

            }
          }
        >
          <div className="modal-body">
            <Button variant="outline-danger" id="x" onClick={this.onCloseModal}> X </Button>
            <h2>Sign up</h2>
            <form className="contact-form form-validate3" novalidate="novalidate">
              <div className="form-group">
                <input className="form-control" type="text" name="studentid" id="name" placeholder="Student ID" autocomplete="off"  required/>
              </div>
              <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="E-mail" autocomplete="off" aria-required="true" required/>
              </div>
              <div className="form-group">
                <input type="password" name="pass" className="form-control" placeholder="Password" autocomplete="off" aria-required="true" required/>
              </div>
              <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
            </form>

          </div>
        </Modal>



        <Modal isOpen={login} onRequestClose={this.onCloseModalclose}
          shouldCloseOnOverlayClick={true}
          animationType="fade"
          transparent={true}
          visible={this.props.visible}
          style={
            {
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)'
              },
              content: {
                position: 'absolute',
                top: '25%',
                left: '35%',
                right: '35%',
                bottom: '25%',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',

                borderRadius: '4px',
                outline: 'none',

              }

            }
          }
        >
          <div className="modal-body">
            <Button variant="outline-danger" id="x" onClick={this.onCloseModalclose}> X </Button>
            <h2>Login</h2>

            <form className="contact-form form-validate4" novalidate="novalidate">
              <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="E-mail" autocomplete="off"  required/>
              </div>
              <div className="form-group">
                <input type="password" name="pass" className="form-control" placeholder="Password" autocomplete="off"  required/>
              </div>
              <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
            </form>
          </div>
        </Modal>

      </>
    );
  }
}

export default Header;