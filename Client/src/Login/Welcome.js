import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops'
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from 'bc-react-session';
import { Button } from "react-bootstrap";
import Axios from "axios";
import "../static/bodycomponent.css";
//import InputField from "./InputField";

const Welcome = () => {
  
  const { payload } = Session.get();
  const session = Session.get();
  //console.log(session);
  let history = useHistory();
  let username = payload.name;
  const [show, setshow] = useState(payload.page? true : false);
  const [staff, setstaff] = useState(payload.staff? "true":"false");

  if (!session.isValid) {
    history.push("/");
  }

  const showPage = () =>{
    setshow(!show);
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
          <div class="custom-content">
            <div className="body">
              <h1 className="user"> Welcome, {username}! You are in your private page. </h1>
              <br/>
              {payload.staff ? (<h2 className="userright">You've logged into a staff account and now have the right to change content of this page! </h2>)
                : (<h2 className="userright">You've logged into a student account. You do not have the right to change content of this page!</h2>)}
                <br/>
                <br/>
              <p id="usercontent" className="user user-content" contenteditable={staff}>{payload.text}</p>
              <br/>
              <p className="user user-content"> Your name is <span className="userInput" id="username" contenteditable={staff}>{payload.name}</span></p>
              <br/>
              <p className="user user-content"> Your age is <span className="userInput" id="userage" contenteditable={staff}>{payload.age}</span></p>
              <br/>
              {payload.staff ? (
                <>
                  <Button class="btn btn-outline-primary" variant="secondary" onClick={saveChange}>Save Changes</Button>
                  <br />
                  <br />
                  
                  <Button class="btn btn-outline-primary" variant="secondary" onClick={showPage}>{show?(<>Go back</>):(<>I want to Create my own page</>)}</Button>
                  <br/>
                  <br/>
                  {show?(
                    <>
                    <textarea placeholder="Enter your HTML here..." rows="8" cols="80" name="custompage" id="CustomPage">
                      {payload.page}
                    </textarea>
                    <br />
                    <br />
                    <Button variant="secondary" onClick={createPage}>Create Page</Button>
                    <br />
                    <br />
                    {payload.page ? (<><Button variant = "warning" href="#/CustomPage">Go to your Page</Button>
                      <br />
                      <br />
                      <Button  variant = "danger" onClick={DeletePage}>Delete Page</Button>
                    </>) : (<></>)}
                    </>
                  ):(<></>)}
                    </>
                  ) : (<></>)}
            </div>

          </div>
        </>

      }
    </Spring>
  );

}


const createPage = () => {
  var page = document.getElementById('CustomPage').value;
  //console.log(page);
  //console.log("Seesion:", Session.get());
  var username = Session.get().payload.username;
  Axios.post("http://fall2020-comp307.cs.mcgill.ca:3001/CreatePage", {
    Username: username,
    CustomPage: page
  }).then((response) => {
    if (response.data.message) {
      Session.setPayload({
        page: page
      });
      console.log("Session:", Session.get());
      alert(response.data.message);
      window.location.reload();
    }
  });

}
const DeletePage = () => {

  var username = Session.get().payload.username;
  Axios.post("http://fall2020-comp307.cs.mcgill.ca:3001/DeletePage", {
    Username: username,
  }).then((response) => {
    if (response.data.message) {
      Session.setPayload({
        page: null
      });
      //console.log("Seesion:", Session.get());
      alert(response.data.message);
      window.location.reload();
    }
  });

}


const saveChange = () => {
  var text = document.getElementById('usercontent').innerText;
  var age = parseInt(document.getElementById('userage').innerText);
  var name = document.getElementById('username').innerText;
  if (Number.isInteger(age) == false) {
    age = Session.get().payload.age;
    console.log("changed age is still:", age);
    alert("Input age must be integer!");

  }
  //console.log("changed content:", text);
  var username = Session.get().payload.username;
  Axios.post("http://fall2020-comp307.cs.mcgill.ca:3001/changecontent", {
    Username: username,
    changedname: name,
    changedage: age,
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