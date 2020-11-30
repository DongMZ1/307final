import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
import { useLocation } from "react-router-dom";

const Welcome = ()=>  {
  const location = useLocation();
        return (
          <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props => 
          <div class="row" style={props}>
            <ScrollToTopOnMount />
        <div class="col-sm-9">
          <p>Welcome! User! {`${location.state.username}`} </p>
        </div>
    </div> 
     }
     </Spring>);
    
}
 
export default Welcome;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }