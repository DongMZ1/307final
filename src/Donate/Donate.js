import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
class Donate extends Component {
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
            <div style={props}>       
                <ScrollToTopOnMount />
                Donate
                </div>
                 }
                 </Spring>
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