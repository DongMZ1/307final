import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops'
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from 'bc-react-session';
import { Button } from "react-bootstrap";
import Axios from "axios";
import "../static/bodycomponent.css"; 

const Welcome = () => {
  //const [staff, setstaff] = useState("false");
  var staff = "false";
  const { payload } = Session.get();
  const session = Session.get();
  //console.log(session);
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
            <div className ="body">
            <h1 > Welcome! {username}, You are in your private page. </h1>
            {payload.staff ? (<h2>You logged into a staff account you have right to change content of this page! </h2>)
              : (<h2>Welcome Student ! </h2>)}
            <p id="usercontent" contenteditable={staff}>{payload.text}</p>
            <p> Your name is <span id="username" contenteditable={staff}>{payload.name}</span></p>
            <p> Your age is <span id="userage" contenteditable={staff}>{payload.age}</span></p>
            {payload.staff ? (<Button variant="light" onClick={saveChange}>Save Changes</Button>)
              : (<></>)}
            </div>

          </div>
        </>

      }
    </Spring>
  );

}

const saveChange = () =>{
  var text = document.getElementById('usercontent').innerText;
  var age = parseInt(document.getElementById('userage').innerText);
  var name = document.getElementById('username').innerText;
  if(Number.isInteger(age) == false){
    alert("Input age must be integer!");
    age = Session.get().payload.age;
  }
  //console.log("changed content:", text);
  var username = Session.get().payload.username;
  Axios.post("http://fall2020-comp307.cs.mcgill.ca:3001/changecontent", {
    Username: username,
    changedname: name,
    channgedage :  age,
    changetext: text
  }).then((response) => {
    if (response.data.message) {
      alert(response.data.message)
      Session.setPayload({
        name: name,
        age: age,
        text: text
      });
      window.location.reload();
    }
  });

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