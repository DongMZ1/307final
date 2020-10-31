import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

class Indexpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <Footer />
            </div>
            
         );
    }
}
 
export default Indexpage;