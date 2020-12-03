import React, { Component } from "react";
import { Session } from 'bc-react-session';

class Session extends Component {
    constructor(props) {
        super(props)
        Session.start(
            {
                payload: {
                    username: ""
                },
                expiration: 10
            }
        );
        const session = Session.get();
        const { payload } = Session.get();
        this.state = {
            logStatus: session.isValid,
            username: ""
        };
    };

    //   handleChange = evt => {
    //     this.setState({html: evt.target.value});
    //   };

    render = () => {
        
    };
}

export default Session;