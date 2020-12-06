import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import kemme from "../pictures/kemme.jpg";
import blanchette from "../pictures/blanchette.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import mydata from "./info.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/bodycomponent.css";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
export default class PeopleFaculty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mydata,
    };
  }

  render() {
    Aos.init();
    const { data } = this.state;
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div class="row" style={props}>
            <ScrollToTopOnMount />
            <div class="col-md-2" style={{ backgroundColor: "aliceblue" }}>
              <div
                class="nav flex-column nav-pills"
                id=""
                role="tablist"
                aria-orientation="vertical"
              >
                <div class="tab-name">People</div>
                <a
                  class="nav-link active"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleFaculty"
                  role="tab"
                >
                  Faculty
                </a>
                <a
                  class="nav-link"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleStaff"
                  role="tab"
                >
                  Staff
                </a>
                <a
                  class="nav-link"
                  id=""
                  data-toggle="pill"
                  href="#/People/PeopleCommunity"
                  role="tab"
                >
                  Community
                </a>
              </div>
            </div>
            <div class="col-md-10 right-column">
              <div className="body">
                <div class="container">
                  <h2>Director of School</h2>
                  <div class="row">
                    <div class="col-xs-1 col-md-3">
                      <img src={kemme} id="facultypic"></img>
                    </div>
                    <div class="col-xs-11 col-md-9">
                      <div class="faculty-content">
                        <br></br>
                        <h3>Bettina Kemme</h3>
                        <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                          <i class="fa fa-arrow-right"></i>
                          <span class="spn">Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <h2>Associate Director of Research</h2>
                  <div class="row">
                    <div class="col-xs-1 col-md-3">
                      <img src={blanchette} id="facultypic"></img>
                    </div>
                    <div class="col-xs-11 col-md-9">
                      <div class="faculty-content">
                        <br></br>
                        <h3>Mathieu Blanchette</h3>
                        <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                          <i class="fa fa-arrow-right"></i>
                          <span class="spn">Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <h2>Professors</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <h2>Faculty Lecturers</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>Associate Members</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>Adjunct Professors</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>Emeritus Professors</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <h2>In Memoriam</h2>
                  <div class="row">
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col">
                          <img src={blanchette} id="facultypic"></img>
                        </div>
                        <div class="col">
                          <div class="faculty-content">
                            <br></br>
                            <h3>Mathieu Blanchette</h3>
                            <a role="button" class="btn btn-outline-primary btn-lg btn-iconed btn-rounded">
                              <i class="fa fa-arrow-right"></i>
                              <span class="spn">Website</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
                <div class="container">
                <ReactTable
                  data={data}
                  columns={[
                    {
                      columns: [
                        {
                          Header: "First Name",
                          id: "firstName",
                          width: 150, 
                          accessor: (d) => d.firstName,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").join("");
                            const bReverse = b.split("").join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Last Name",
                          id: "lastName",
                          width: 150, 
                          accessor: (d) => d.lastName,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").join("");
                            const bReverse = b.split("").join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Position",
                          id: "position",
                          width: 250, 
                          accessor: (d) => d.position,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? -1 : 1;
                          },
                        },
                        {
                          Header: "Field",
                          id: "field",
                          width: 600,
                          accessor: (d) => d.field,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? 1 : -1;
                          },
                        },
                        {
                          Header: "Office",
                          id: "office",
                          width: 200,
                          accessor: (d) => d.office,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? 1 : -1;
                          },
                        },
                        {
                          Header: "Phone",
                          id: "phone",
                          width: 200,
                          accessor: (d) => d.phone,
                          sortMethod: (a, b) => {
                            if (a === b) {
                              return 0;
                            }
                            const aReverse = a.split("").reverse().join("");
                            const bReverse = b.split("").reverse().join("");
                            return aReverse > bReverse ? 1 : -1;
                          },
                        },
                      ],
                    }
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
