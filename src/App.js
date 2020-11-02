import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import AboutContacts from './About/AboutContacts'
import AcademicOverview from './Academic/AcademicOverview'
import Donate from './Donate/Donate'
import EmploymentFaculty from './Employment/EmploymentFaculty'
import News from './News/News'
import PeopleFaculty from './People/PeopleFaculty'
import PerspectiveOverview from './ProspectivePages/ProspectiveOverview'
import ResearchOverview from './Research/ResearchOverview'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
      <Router>
      <Header />
       <Switch>
         {/*homepage*/}
           <Route path = '/' component = {HomePage} exact />

         {/*prospectivePages*/}

           <Route path = "/ProspectivePages/ProspectiveOverview" component = {PerspectiveOverview} />
        

         {/*Academic*/}
           <Route path = "/Academic/AcademicOverview" component = {AcademicOverview} />

          {/*Research*/}
          <Route path = "/Research/ResearchOverview" component = {ResearchOverview} />

          {/*People*/}
          <Route path = "/People/PeopleFaculty" component = {PeopleFaculty} />

          {/*News*/}
          <Route path = "/News/News" component = {News} />
          
          {/*Empolyment*/}
          <Route path = "/Employment/EmploymentFaculty" component = {EmploymentFaculty} />

          {/*Donate*/}
          <Route path = "/Donate/Donate" component = {Donate} />

           {/*about*/}
           <Route path = "/About/AboutContacts" component = {AboutContacts} />

       </Switch>
       <Footer />
       </Router>
  );
}

export default App;
