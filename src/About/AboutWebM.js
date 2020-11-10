import React, { Component } from 'react';
class AboutWebM extends Component {
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
      <a class="nav-link" id="" data-toggle="pill" href="AboutContacts" role="tab">Contacts</a>
      <a class="nav-link" id="" data-toggle="pill" href="AboutFacilities" role="tab">Facilities</a>
      <a class="nav-link" id="" data-toggle="pill" href="AboutVF" role="tab">Visitor Form</a>
      <a class="nav-link" id="" data-toggle="pill" href="AboutRoomR" role="tab">Room Reservation</a>
      <a class="nav-link active" id="" data-toggle="pill" href="AboutWebM" role="tab">Web Mail</a>
      <a class="nav-link" id="" data-toggle="pill" href="AboutInternal" role="tab">Internal</a>
      <a class="nav-link" id="" data-toggle="pill" href="AboutTechSupport" role="tab">Tech Support</a>
      <a class="nav-link" id="" data-toggle="pill" href="AboutAdminInfor" role="tab">Admin Infor</a>
    </div>

                </div>
                <div class="col-sm-9">
      <p>real content Major</p>
                </div>
            </div>
         );
    }
}
 
export default AboutWebM;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }