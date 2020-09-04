import React, { Component } from 'react';
import './HeapBlock.css';
import { Container, Row, Col } from 'react-bootstrap';
import MinHeap from '../dataStructures/heap';

export default class HeapBlock extends Component {
    constructor() {
        super();
        this.state = {
            finalarray: [],
            resizefactor: 1,
            width: 120,
            height: 100,
            permitOverflow: true,
            heap: new MinHeap()
        }
    }
    fillTree() {

        const array = this.state.heap.heap
        let num = Math.floor(Math.random() * 10)
        this.state.heap.insert({ distance: num })
        console.log(array)
        const finalarray = [[{ value: array[1], pos: 1 }]]
        for (let i = 1; i < array.length; i++) {
            let lastelementchecked = false;
            finalarray.push([])
            for (let element of finalarray[i - 1]) {
                finalarray[i].push({ value: array[element.pos * 2], pos: element.pos * 2 })
                finalarray[i].push({ value: array[element.pos * 2 + 1], pos: element.pos * 2 + 1 })
                if (element.pos * 2 == array.length - 1 || element.pos * 2 == array.length) {
                    lastelementchecked = true
                }
            }
            if (lastelementchecked) break;

        }
        console.log(finalarray)
        this.setState({ heap: this.state.heap, finalarray: finalarray })
    }
    removeSmallest() {
        this.state.heap.remove()
        const array = this.state.heap.heap
        const finalarray = [[{ value: array[1], pos: 1 }]]
        for (let i = 1; i < array.length; i++) {
            let lastelementchecked = false;
            finalarray.push([])
            for (let element of finalarray[i - 1]) {
                finalarray[i].push({ value: array[element.pos * 2], pos: element.pos * 2 })
                finalarray[i].push({ value: array[element.pos * 2 + 1], pos: element.pos * 2 + 1 })
                if (element.pos * 2 == array.length - 1 || element.pos * 2 == array.length) {
                    lastelementchecked = true
                }
            }
            if (lastelementchecked) break;

        }
        console.log(finalarray)
        this.setState({ heap: this.state.heap, finalarray: finalarray })
    }
    componentDidUpdate() {
        const element = this.element;
        // Things involving accessing DOM properties on element
        // In the case of what this question actually asks:
        const hasOverflowingChildren = element.offsetHeight < element.scrollHeight ||
            element.offsetWidth < element.scrollWidth;
        if (hasOverflowingChildren && this.state.permitOverflow) {
            const resizefactor = this.state.resizefactor * 0.9
            const width = resizefactor * 120
            const height = resizefactor * 100
            if (width <= 30) {
                this.setState({ resizefactor: this.state.resizefactor * 0.9, width: 30, height: 27, permitOverflow: false })

            } else {
                this.setState({ resizefactor: this.state.resizefactor * 0.9, width: width, height: height })

            }
        }
    }
    render() {
        const { finalarray, width, height } = this.state

        return (

            <div style={{
                width: "100%",
                display: "inline-block",
                overflowX: "auto"
            }} ref={(el) => { this.element = el }}>

                <button onClick={() => this.fillTree()}>
                    Add to Heap
            </button>
                <button onClick={() => this.removeSmallest()}>
                    Remove smallest number from Heap
            </button>
                {finalarray.map((row, rowIdx) => {
                    //const size = finalarray[finalarray.length - 1].length * 150
                    return (
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            //width: `1000px`

                        }}>
                            {
                                row.map((col, colidx) => {
                                    let color = "red"
                                    let value = undefined
                                    if (col.value == undefined) {
                                        color = ""
                                    } else {
                                        value = col.value.distance
                                    }
                                    return (
                                        <Col style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <div style={{
                                                width: `${width}px`,
                                                height: `${height}px`,
                                                "backgroundColor": `${color}`,
                                                "borderRadius": "200px"
                                            }}>{value}</div>

                                        </Col>

                                    )
                                })}
                        </div>

                    )

                })}

            </div>




        );
    }
}

