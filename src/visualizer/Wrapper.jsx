
import React, { Component } from 'react';
import Visualizer from './Visualizer';
export default class Wrapper extends Component {
    constructor() {
        super();
        this.state = {
            reset: false,
        }
    }
    reset() {

        this.setState({
            reset: true
        })

    }
    componentDidUpdate() {
        if (this.state.reset) {
            this.setState({ reset: false })
        }
    }
    render() {
        return (
            !this.state.reset ? <Visualizer reset={() => this.reset()}></Visualizer> : null
        )
    }
}