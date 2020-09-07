import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class ArrayElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            isSelected: this.props.isSelected,
            largestSoFar: this.props.largestSoFar,
            variant: this.props.variant
        }
    }
    switch() {
        setTimeout(() => {
            this.setState({
                variant: "info",
            })
        }, 5);
    }
    render() {
        const { value, isSelected, largestSoFar, variant } = this.state
        let selectedVariant = variant
        if (isSelected) {
            selectedVariant = "danger"
        }
        let height = value / largestSoFar * 400

        return (
            <ProgressBar style={{ width: "50px", height: `${height}px`, transform: 'rotate(180deg)' }} variant={selectedVariant} now={100} label={value} />

        )
    }
}