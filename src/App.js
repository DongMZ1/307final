import './App.css';
// import IndexPage from './IndexPage';
// import LoginPage from './Login/LoginPage';
// import RegisterPage from './Login/RegisterPage';
import Welcome from './Login/Welcome'
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
// import { HashRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'
import HomePage from './HomePage'
import React, {useState} from "react";

import AboutContacts from './About/AboutContacts'
import AboutFacilities from './About/AboutFacilities'
import AboutVF from './About/AboutVF'
import AboutRoomR from './About/AboutRoomR'
import AboutWebM from './About/AboutWebM'
import AboutInternal from './About/AboutInternal'
import AboutTechSupport from './About/AboutTechSupport'
import AboutAdminInfor from './About/AboutAdminInfor'


import AcademicUndergrad from './Academic/AcademicUndergrad'
import AcademicGrad from './Academic/AcademicGrad'
import AcademicFunding from './Academic/AcademicFunding'
import AcademicTeachingAss from './Academic/AcademicTeachingAss'
import AcademicCourses from './Academic/AcademicCourses'
import AUinfor from './Academic/AUinfor'

import Donate from './Donate/Donate'

import EmploymentFaculty from './Employment/EmploymentFaculty'
import EmploymentLecturer from './Employment/EmploymentLecturer'
import EmploymentPP from './Employment/EmploymentPP'
import EmploymentResearch from './Employment/EmploymentResearch'
import EmploymentStudents from './Employment/EmploymentStudents'

import News from './News/News'
import Events from './News/Events'

import PeopleFaculty from './People/PeopleFaculty'
import PeopleStaff from './People/PeopleStaff'
import PeopleCommunity from './People/PeopleCommunity'

import ProspectiveGeneralInfo from './ProspectivePages/ProspectiveGeneralInfo'
import ProspectiveCEGEP from './ProspectivePages/ProspectiveCEGEP'
import ProspectiveChoosingAMajor from './ProspectivePages/ProspectiveChoosingAMajor'
import ProspectiveFreshman from './ProspectivePages/ProspectiveFreshman'
import ProspectiveGrad from './ProspectivePages/ProspectiveGrad'
import ProspectiveInternship from './ProspectivePages/ProspectiveInternship'
import ProspectiveUndergrad from './ProspectivePages/ProspectiveUndergrad'
import ProspectiveWhyCS from './ProspectivePages/ProspectiveWhyCS'
import ProspectiveTransfer from './ProspectivePages/ProspectiveTransfer'

import ResearchArea from './Research/ResearchArea'
import ResearchTecReport from './Research/ResearchTecReport'
import Editable from "./Editable";
//import { Session } from 'bc-react-session';
//import Cookies from 'js-cookie';

// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  // const [logStatus, setlogStatus] = useState(false);
  // const[username, setusername] = useState("");
    //const session = Session.get();
    //console.log("APP page session:", session);
  // const { payload } = Session.get();
  // setlogStatus(session.isValid);
  // if(logStatus){
  //   setusername(payload.username);
  // }
  // const setLoginStatus = (loggedin) => {
  //   setlogStatus(loggedin);
  // }
  

  // const setUsername = (username) => {
  //   setusername(username);
  // }
  //console.log("asdfasdfasdf:", Cookies.get('username'))
  
  return (
      <Router>
      <ScrollToTop />
      <Header/>
       <Switch>
         {/*homepage*/}
           <Route path = '/' component = {HomePage} exact />
         {/*prospectivePages*/}
          {/* <Route path = "/login" component = {LoginPage} />
           <Route path = "/register" component = {RegisterPage} /> */}
           <Route path = "/welcome" component = {Welcome}/>
           <Route path = "/ProspectivePages/ProspectiveGeneralInfo" component = {ProspectiveGeneralInfo} />
           <Route path = "/ProspectivePages/ProspectiveCEGEP" component = {ProspectiveCEGEP} />
           <Route path = "/ProspectivePages/ProspectiveChoosingAMajor" component = {ProspectiveChoosingAMajor} />
           <Route path = "/ProspectivePages/ProspectiveFreshman" component = {ProspectiveFreshman} />
           <Route path = "/ProspectivePages/ProspectiveGrad" component = {ProspectiveGrad} />
           <Route path = "/ProspectivePages/ProspectiveInternship" component = {ProspectiveInternship} />
           <Route path = "/ProspectivePages/ProspectiveUndergrad" component = {ProspectiveUndergrad} />
           <Route path = "/ProspectivePages/ProspectiveWhyCS" component = {ProspectiveWhyCS} />
           <Route path = "/ProspectivePages/ProspectiveTransfer" component = {ProspectiveTransfer} />
        

         {/*Academic*/}
           <Route path = "/Academic/AcademicUndergrad" component = {AcademicUndergrad} />
           <Route path = "/Academic/AcademicGrad" component = {AcademicGrad} />
           <Route path = "/Academic/AcademicFunding" component = {AcademicFunding} />
           <Route path = "/Academic/AcademicTeachingAss" component = {AcademicTeachingAss} />
           <Route path = "/Academic/AcademicCourses" component = {AcademicCourses} />
           <Route path = "/Academic/AUinfor" component = {AUinfor} />

          {/*Research*/}
          <Route path = "/Research/ResearchArea" component = {ResearchArea} />
          <Route path = "/Research/ResearchTecReport" component = {ResearchTecReport} />

          {/*People*/}
          <Route path = "/People/PeopleFaculty" component = {PeopleFaculty} />
          <Route path = "/People/PeopleStaff" component = {PeopleStaff} />
          <Route path = "/People/PeopleCommunity" component = {PeopleCommunity} />

          {/*News*/}
          <Route path = "/News/News" component = {News} />
          <Route path = "/News/Events" component = {Events} />
          
          {/*Empolyment*/}
          <Route path = "/Employment/EmploymentFaculty" component = {EmploymentFaculty} />
          <Route path = "/Employment/EmploymentLecturer" component = {EmploymentLecturer} />
          <Route path = "/Employment/EmploymentPP" component = {EmploymentPP} />
          <Route path = "/Employment/EmploymentResearch" component = {EmploymentResearch} />
          <Route path = "/Employment/EmploymentStudents" component = {EmploymentStudents} />

          {/*Donate*/}
          <Route path = "/Donate/Donate" component = {Donate} />

           {/*about*/}
           <Route path = "/About/AboutContacts" component = {AboutContacts} />
           <Route path = "/About/AboutFacilities" component = {AboutFacilities} />
           <Route path = "/About/AboutVF" component = {AboutVF} />
           <Route path = "/About/AboutRoomR" component = {AboutRoomR} />
           <Route path = "/About/AboutWebM" component = {AboutWebM} />
           <Route path = "/About/AboutInternal" component = {AboutInternal} />
           <Route path = "/About/AboutTechSupport" component = {AboutTechSupport} />
           <Route path = "/About/AboutAdminInfor" component = {AboutAdminInfor} />

       </Switch>
       <Footer />
       </Router>
  );
}

export default App;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(200, 200);
  }

  render() {
    return null;
  }
}