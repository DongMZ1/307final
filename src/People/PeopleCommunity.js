import React, { Component } from 'react';
class PeopleCommunity extends Component {
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
  <a class="nav-link" id="" data-toggle="pill" href="PeopleFaculty" role="tab">People Faculty</a>
  <a class="nav-link" id="" data-toggle="pill" href="PeopleStaff" role="tab">People Staff</a>
  <a class="nav-link active" id="" data-toggle="pill" href="PeopleCommunity" role="tab">People Community</a>
</div>

            </div>
            <div class="col-sm-9">
  <p>real content Major</p>
            </div>
        </div>
         );
    }
}
 
export default PeopleCommunity;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }