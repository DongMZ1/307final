import React, {useState}from 'react';
import { Spring } from 'react-spring/renderprops'
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from 'bc-react-session';
import {SaveEdit} from './SaveEdit';



const Welcome = () => {
  //const [staff, setstaff] = useState(false);
  const { payload } = Session.get();
  const session = Session.get();
  let history = useHistory();
  let username = payload.name;
  if(!session.isValid){
    history.push("/");
  }
  // if(payload.staff){
  //   setstaff(true);
  // }
  return (
    
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}>
      {props =>
      <>
        <div class="row" style={props}>
          <ScrollToTopOnMount />
          <div >
            <h1 id = "usercontent"> Welcome! {username}  </h1>
            {payload.staff? (<h2>You logged into a staff account you have right to change content of this page! </h2>)
            :(<h2>Welcome Student ! </h2>)}
            
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