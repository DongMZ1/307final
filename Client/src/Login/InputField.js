import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops'
import { useHistory } from "react-router-dom";
//import Header from "../Header";
import { Session } from 'bc-react-session';
import { Button } from "react-bootstrap";
import Axios from "axios";
import "../static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";

const InputField = () => {
    Aos.init();
    return (
        
            <form>
                <textarea rows="4" cols="50" name="custompage">
                    Enter text here...</textarea>
                <button type="submit" className="btn btn-md btn-primary btn-center">
                    Submit
                        </button>
            </form>


    );

}



export default InputField;