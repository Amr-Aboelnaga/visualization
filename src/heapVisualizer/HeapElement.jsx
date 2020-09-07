
import React, { Component } from 'react';

export default class HeapElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            width: this.props.width,
            height: this.props.height,
            color: this.props.color,
            isSelected: this.props.isSelected,
            toBeSwappedWith: this.props.toBeSwappedWith,
            remove: this.props.remove
        }

    }
    switch() {
        setTimeout((toBeSwappedWith) => {
            const value = this.state.toBeSwappedWith ? this.state.toBeSwappedWith.value : this.state.value
            this.setState({
                color: "teal",
                value: value,
                toBeSwappedWith: undefined,
                isSelected: false
            })
        }, 500);

    }
    switchtoRemoved() {
        setTimeout(() => {
            this.setState({
                value: undefined,
                color: "",
                remove: false
            })
        }, 500);


    }

    render() {
        let { value, width, height, color, isSelected, toBeSwappedWith, remove } = this.state
        if (remove) {
            color = "red";
            this.switchtoRemoved()
        }
        if (isSelected && value !== undefined) {
            color = "blue"
            this.switch(toBeSwappedWith)
        }
        // else if (isSelected && this.state.isSelected && value) {
        //     this.switch()
        // }
        if (value === undefined)
            color = ""
        return (
            <div style={{
                width: `${width}px`,
                height: `${height}px`,
                "backgroundColor": `${color}`,
                "borderRadius": "200px"
            }}>{this.state.value}</div>
        )
    }

}
