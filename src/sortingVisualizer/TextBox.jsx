import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default class TextBox extends Component {

    constructor(props) {
        super(props);
        let state = { msg_text: "" };
        this.state = state;
        this.handleChange = this.handleChange.bind(this);
        this.addNewLineToTextArea = this.addNewLineToTextArea.bind(this);
    }

    onKeyPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey) {
            e.preventDefault();
            this.addNewLineToTextArea();
        }
    };


    addNewLineToTextArea() {
        let msg_text = this.state.msg_text + "\r\n";
        this.setState({ msg_text: msg_text });
    }


    handleChange(funcArg) {
        let new_state = {};
        new_state[funcArg.name] = funcArg.event.target.value;
        this.setState(new_state);
        funcArg.event.target.setCustomValidity("");
    }

    render() {
        const placeHolder = ` 
        use initialize(array) to initialize the array
        use add(element) to add to the array
        use remove(index) to remove from the array
        use change(index,value) to change array[index] to value
        use select(...indices) to select indices
        use unselect() to unselect all
        use getArray() to get the current array's state
        `
        return (
            <Container>
                <Col>
                    <textarea rows="3" placeholder={placeHolder} onChange={(e) =>
                        this.handleChange({ "event": e, "name": "msg_text" })} onKeyDown={this.onKeyPress}
                        value={this.state.msg_text || ''} style={{ width: this.props.width, height: 300 }} >
                    </textarea>
                </Col>
                <Col>
                    <Button onClick={() => this.props.getText(this.state.msg_text)} style={{ width: 100, height: 100 }}> SUBMIT</Button>

                </Col>
            </Container>



        )
    }
}