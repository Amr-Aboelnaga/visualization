
import React, { Component } from 'react';
import Visualizer from './Visualizer';
export default class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reset: false,
            height: this.props.height,
            width: this.props.width
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
            !this.state.reset ? <Visualizer reset={() => this.reset()} width={this.props.width} height={this.props.height}></Visualizer > : null
        )
    }
}