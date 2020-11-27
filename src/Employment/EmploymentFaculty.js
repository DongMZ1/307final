import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
class EmploymentFaculty extends Component {
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
      <a class="nav-link active" id="" data-toggle="pill" href="EmploymentFaculty" role="tab">Employment Faculty</a>
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentLecturer" role="tab">Employment Course Lecturer</a>
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentPP" role="tab">Employment Priority Points</a>
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentResearch" role="tab">Employment Research</a>
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentStudents" role="tab">Employment Students</a>
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
 
export default EmploymentFaculty;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }