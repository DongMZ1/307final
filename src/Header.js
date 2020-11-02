import React, { Component } from 'react';
import './CSS/header.css'
import {Link} from 'react-router-dom'
import HomePage from './HomePage'
import AboutContacts from './About/AboutContacts'
import AcademicOverview from './Academic/AcademicOverview'
import Donate from './Donate/Donate'
import EmploymentFaculty from './Employment/EmploymentFaculty'
import News from './News/News'
import PeopleFaculty from './People/PeopleFaculty'
import PerspectiveOverview from './ProspectivePages/ProspectiveOverview'
import ResearchOverview from './Research/ResearchOverview'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className = 'header'>
                <div className = 'headerleft'>
                    <h1 style = {{textDecoration: "underline", fontSize: "50px"}}>University of Mcgill</h1>
                    <h1>School of Computer Science</h1>
                    <br/>
                    <div>
                        {/* layouy for Prospective button */}
                        <span id="prospectiveButton">Prospective</span>
                        <Link to = "/ProspectivePages/ProspectiveOverview">Perspective Overview</Link>
                        <Link to = "/Academic/AcademicOverview">Academic</Link>
                        <span className = 'hyperlinkButton'>Research</span>
                        <span className = 'hyperlinkButton'>People</span>
                        <span className = 'hyperlinkButton'>News</span>
                        <span className = 'hyperlinkButton'>Empolyment</span>
                        <span className = 'hyperlinkButton'>Donate</span>
                        <span className = 'hyperlinkButton'>About</span>
                    </div>
                    <br/>
                    <form onsubmit="event.preventDefault();" role="search">
  <input className = 'input' type="search" placeholder="Search..." autofocus required />
  <button className = 'goButton' type="submit">Go</button>    
</form>
                </div>
                
            </div>
        );
    }
}
 
export default Header;