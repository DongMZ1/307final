import React, { Component } from 'react';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               This is HomePage;
               <a href = "http://127.0.0.1:5000/login">register</a>
            </div>
            
         );
    }
}
 
export default HomePage;