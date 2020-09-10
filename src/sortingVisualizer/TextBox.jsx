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

        return (
            <Container>
                <Col>
                    <textarea rows="3" placeholder="write..." onChange={(e) =>
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