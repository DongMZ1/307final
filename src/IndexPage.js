import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
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