import React, { Component } from 'react';
import '../static/css/header.css'

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
                </div>

            </div>
        );
    }
}
 
export default Header;