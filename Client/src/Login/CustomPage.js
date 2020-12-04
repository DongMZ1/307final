import React from 'react';
import { Spring } from 'react-spring/renderprops'
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from 'bc-react-session';
import { Button } from "react-bootstrap";
//import Axios from "axios";
import "../static/bodycomponent.css";
import { Markup } from 'interweave';

const CustomPage = () => {
    //const [staff, setstaff] = useState("false");
    //alert("You are in your customized page!")
    const { payload } = Session.get();
    const session = Session.get();
    //console.log(session);
    let history = useHistory();
    //let username = payload.name;
    if (!session.isValid) {
        history.push("/");
    }

    var content = payload.page;

    return (

        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props =>
                <>
                    <div class="row" style={props}>
                        <ScrollToTopOnMount />

                    </div>
                    <div class="col-sm-9">
                        <div className="body" id="CustomArea">
                            <Markup content={content} />

                            <Button variant="light" href="#/welcome">Back to your Profile Page</Button>

                        </div>

                    </div>
                </>

            }
        </Spring>
    );

}



export default CustomPage;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 600);
    }

    render() {
        return null;
    }
}