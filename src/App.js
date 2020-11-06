import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
import IndexPage from './IndexPage';
=======
import Header from './Header'
import Gallery from './Gallery'
import Footer from './Footer'
import HomePage from './HomePage'
import AboutContacts from './About/AboutContacts'
import AcademicOverview from './Academic/AcademicOverview'
import Donate from './Donate/Donate'
import EmploymentFaculty from './Employment/EmploymentFaculty'
import News from './News/News'
import PeopleFaculty from './People/PeopleFaculty'
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <IndexPage />
=======
      <Router>
      <Header />
      <Gallery />
       <Switch>
         {/*homepage*/}
           <Route path = '/' component = {HomePage} exact />

         {/*prospectivePages*/}

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
>>>>>>> Stashed changes
  );
}

export default App;
