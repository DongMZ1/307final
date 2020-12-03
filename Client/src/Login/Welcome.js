import React, {useState}from 'react';
import { Spring } from 'react-spring/renderprops'
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from 'bc-react-session';
import {SaveEdit} from './SaveEdit';



const Welcome = () => {
  const [logStatus, setlogStatus] = useState(false);
  const { payload } = Session.get();
  const session = Session.get();
  let history = useHistory();
  let username = payload.username;
  if(!session.isValid){
    history.push("/");
  }
  return (
    
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}>
      {props =>
      <>
        <div class="row" style={props}>
          <ScrollToTopOnMount />
          <div >
            <h1 id = "usercontent" contenteditable = "true"> Welcome! {username} ! You are succefully logged in ! 
            You are able to change the content of page only! but not able to change the layout and theme of the page!
            </h1>
          </div>
          
        </div>
        </>
        
      }
    </Spring>
    );

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