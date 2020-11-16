import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
class AcademicCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props => 
            <div class="row" style={props}>
                <ScrollToTopOnMount />
                <div class="col-sm-3">
      
                <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="AcademicUndergrad" role="tab">Academic Undergraduate</a>
      <a class="nav-link" id="" data-toggle="pill" href="AcademicGrad" role="tab">Academic Graduate</a>
      <a class="nav-link active" id="" data-toggle="pill" href="AcademicCourses" role="tab">Academic Course</a>
      <a class="nav-link" id="" data-toggle="pill" href="AcademicTeachingAss" role="tab">Academic Teaching Assistant</a>
      <a class="nav-link" id="" data-toggle="pill" href="AcademicFunding" role="tab">Academic Funding</a>
    </div>

                </div>
                <div class="col-sm-9">
      <p>real content Major</p>
                </div>
            </div>
             }
             </Spring>
          );
    }
}
 
export default AcademicCourses;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }