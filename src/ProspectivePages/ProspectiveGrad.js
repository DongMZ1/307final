import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
class ProspectiveGrad extends Component {
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
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveGeneralInfo" role="tab">General Info</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveWhyCS" role="tab">Why CS</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveCEGEP" role="tab">CEGEP</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveFreshman" role="tab">Freshman</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveChoosingAMajor" role="tab">Choosing A Major</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveTransfer" role="tab">Transfer</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveInternship" role="tab">Internship</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveUndergrad" role="tab">Undergraduate Admission</a>
      <a class="nav-link active" id="" data-toggle="pill" href="ProspectiveGrad" role="tab">Graduate Admission</a>
    </div>

        </div>
        <div class="col-sm-9">
<p>real content Grad</p>
        </div>
    </div>
     }
     </Spring>
      );
    }
}
 
export default ProspectiveGrad;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }