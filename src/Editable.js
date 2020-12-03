import React, { Component } from "react";
import ContentEditable from 'react-contenteditable'
//import {Editor} from 'slate-react';
//import{Value} from 'slate;'
// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
class Editable extends Component{
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef();
        this.state = {html: this.props.text};
      };
     
      handleChange = evt => {
        this.setState({html: evt.target.value});
      };
     
      render = () => {
        return <ContentEditable
                  innerRef={this.contentEditable}
                  html={this.state.html} // innerHTML of the editable div
                  disabled={this.props.status}       // use true to disable editing
                  onChange={this.handleChange} // handle innerHTML change
                  tagName='article' // Use a custom HTML tag (uses a div by default)
                />
      };
}

export default Editable;