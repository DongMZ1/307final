import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops'
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from 'bc-react-session';
import { SaveEdit } from './SaveEdit';



const Welcome = () => {
  //const [staff, setstaff] = useState("false");
  var staff = "false";
  const { payload } = Session.get();
  const session = Session.get();
  let history = useHistory();
  let username = payload.name;
  if (!session.isValid) {
    history.push("/");
  }
  if (payload.staff) {
    staff = "true";
  }


  return (

    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}>
      {props =>
        <>
          <div class="row" style={props}>
            <ScrollToTopOnMount />
          
              </div>
              <div class="col-sm-9">
                <h1 > Welcome! {username}, You are in your private page. </h1>
                {payload.staff ? (<h2>You logged into a staff account you have right to change content of this page! </h2>)
                  : (<h2>Welcome Student ! </h2>)}
                <p id="usercontent" contenteditable={staff}>This content you can change!</p>
                {/* <Button variant="danger" >Save Changes</Button> */}
              
          </div>
        </>

      }
    </Spring>
  );

}

const editables = document.querySelectorAll("[contenteditable]");
editables.forEach(el => {
  el.addEventListener("blur", () => {
    localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
    console.log(localStorage.getItem(el.id));
  })
});


for (var key in localStorage) {
  if (key.includes("dataStorage-")) {
    const id = key.replace("dataStorage-","");
    console.log(localStorage.getItem(key));
  }
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