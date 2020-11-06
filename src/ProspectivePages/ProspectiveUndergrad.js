import React, { Component } from 'react';
class ProspectiveUndergrad extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div class="row">
        <div class="col-sm-3">

        <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveGeneralInfo" role="tab">General Info</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveWhyCS" role="tab">Why CS</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveCEGEP" role="tab">CEGEP</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveFreshman" role="tab">Freshman</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveChoosingAMajor" role="tab">Choosing A Major</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveTransfer" role="tab">Transfer</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveInternship" role="tab">Internship</a>
      <a class="nav-link active" id="" data-toggle="pill" href="ProspectiveUndergrad" role="tab">Undergraduate Admission</a>
      <a class="nav-link" id="" data-toggle="pill" href="ProspectiveGrad" role="tab">Graduate Admission</a>
    </div>


        </div>
        <div class="col-sm-9">
<p>real content admission undergrad</p>
        </div>
    </div> );
    }
}
 
export default ProspectiveUndergrad;