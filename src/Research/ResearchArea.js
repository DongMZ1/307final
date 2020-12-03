import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Accordion, Card } from "react-bootstrap";
import ai from "../pictures/research-ai.jpg";
import "../static/bodycomponent.css";

class ResearchArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() { 
        return ( 
          <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props =>          
          <div class="row" style={props}>
            <ScrollToTopOnMount />
            <div class="col-md-2" style={{backgroundColor: "aliceblue"}}>
              <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
                <div class="tab-name">Research</div>
                <a class="nav-link active" id="" data-toggle="pill" href="ProspectiveGeneralInfo" role="tab">Research Area</a>
                <a class="nav-link" id="" data-toggle="pill" href="ProspectiveWhyCS" role="tab">Academic Graduate</a>
              </div>
            </div>
            <div class="col-md-10 right-column">
              <div className="body">
                <h1>Research @ CS</h1>
                <div className="row">
                  <div className="col-8">
                  <h3>Artificial Intelligence</h3>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Research Areas
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <li>Deep Learning Theory</li>
                            <li>Data Science</li>
                            <li>Data Mining</li>
                            <li>Climate Change</li>
                            <li>Internet Technologies</li>
                            <li>Computer Vision</li>
                            <li>Big Data Applications</li>
                            <li>Societal Impacts of AI</li>
                            <li>Information Retrieval</li>
                            <li>Applied Machine Learning</li>
                            <li>Brain Inspired Artificial Intelligence</li>
                            <li>Network Dynamics</li>
                            <li>Optimization</li>
                            <li>Graph Neural Networks</li>
                            <li>Pattern Recognition</li>
                            <li>Machine Learning applied to Computing Systems</li>
                            <li>Computational Linguistics</li>
                            <li>Machine Learning</li>
                            <li>Network Science</li>
                            <li>Natural Language Processing</li>
                            <li>Reasoning and Learning</li>
                            <li>Social and Information Networks</li>
                            <li>Fairness</li>
                            <li>Computational Social Science</li>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Professors
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                          <a href="/people/faculty/#13" class="list-group-item">Xiao-Wen Chang</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jackie Chi Kit Cheung</a>
                            <a href="/people/faculty/#13" class="list-group-item">Gregory Dudek</a>
                            <a href="/people/faculty/#13" class="list-group-item">Jin Guo</a>
                            <a href="/people/faculty/#13" class="list-group-item">William L. Hamilton</a>
                            <a href="/people/faculty/#13" class="list-group-item">Paul Kry</a>
                            <a href="/people/faculty/#13" class="list-group-item">Michael Langer</a>
                            <a href="/people/faculty/#13" class="list-group-item">Hsiu-Chin Lin</a>
                            <a href="/people/faculty/#13" class="list-group-item">Xue Liu</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Meger</a>
                            <a href="/people/faculty/#13" class="list-group-item">Prakash Panangaden</a>
                            <a href="/people/faculty/#13" class="list-group-item">Joelle Pineau</a>
                            <a href="/people/faculty/#13" class="list-group-item">Doina Precup</a>
                            <a href="/people/faculty/#13" class="list-group-item">Reihaneh Rabbany</a>
                            <a href="/people/faculty/#13" class="list-group-item">Siamak Ravanbakhsh</a>
                            <a href="/people/faculty/#13" class="list-group-item">Siva Reddy</a>
                            <a href="/people/faculty/#13" class="list-group-item">Blake Richards</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Rolnick</a>
                            <a href="/people/faculty/#13" class="list-group-item">Derek Ruths</a>
                            <a href="/people/faculty/#13" class="list-group-item">Kaleem Siddiqi</a>
                            <a href="/people/faculty/#13" class="list-group-item">David Becerra</a>
                            <a href="/people/faculty/#13" class="list-group-item">Yi Yang</a>
                            <a href="/people/faculty/#13" class="list-group-item">Fernando Diaz</a>
                            <a href="/people/faculty/#13" class="list-group-item">Adam Trischler</a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Labs
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>Hello! I'm another body
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="col-4">
                    <Card.Img variant="bottom" className="research-image" src={ai} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          }
        </Spring>
         );
    }
}


 
export default ResearchArea;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }