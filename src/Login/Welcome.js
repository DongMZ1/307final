import React from 'react';
import {Spring} from 'react-spring/renderprops'
import { useLocation } from "react-router-dom";
import Header from "../Header";

const Welcome = ()=>  {
  
        return (
          <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props => 
          <div class="row" style={props}>
            <ScrollToTopOnMount />
        <div >
          <p>Welcome! User! </p>
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