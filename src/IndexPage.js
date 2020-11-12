import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
class Indexpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <a href="http://127.0.0.1:5000/login/">Register</a>
                <Footer />
            </div>
            
         );
    }
}
 
export default Indexpage;