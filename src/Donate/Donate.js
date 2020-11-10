import React, { Component } from 'react';
class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>       
                <ScrollToTopOnMount />
                Donate
                </div>
         );
    }
}
 
export default Donate;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }