import React, { Component } from 'react';
class EmploymentStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div class="row">
                <ScrollToTopOnMount />
                <div class="col-sm-3">
      
                <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentFaculty" role="tab">Empolyment Faculty</a>
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentLecturer" role="tab">Empolyment Course Lecturer</a>
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentPP" role="tab">Empolyment Priority Points</a>
      <a class="nav-link" id="" data-toggle="pill" href="EmploymentResearch" role="tab">Empolyment Research</a>
      <a class="nav-link active" id="" data-toggle="pill" href="EmpolymentStudents" role="tab">Empolyment Students</a>
    </div>

                </div>
                <div class="col-sm-9">
      <p>real content Major</p>
                </div>
            </div>
        );
    }
}
 
export default EmploymentStudents;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }