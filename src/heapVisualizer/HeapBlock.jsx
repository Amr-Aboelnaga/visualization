import React, { Component } from 'react';
import './HeapBlock.css';
import { Col } from 'react-bootstrap';
import MinHeap from '../dataStructures/heap';
import HeapElement from './HeapElement';

export default class HeapBlock extends Component {
    constructor() {
        super();
        this.state = {
            initialheap: [],
            resizefactor: 1,
            width: 120,
            height: 100,
            permitOverflow: true,
            heap: new MinHeap(true),
            actions: [],
            selected: [],
            swappedElements: [],
            remove: false
        }
    }
    heapify(initialarray) {
        const initialheap = [[{ value: initialarray[1], pos: 1 }]]
        for (let i = 1; i < initialarray.length; i++) {
            let lastelementchecked = false;
            initialheap.push([])
            for (let element of initialheap[i - 1]) {
                initialheap[i].push({ value: initialarray[element.pos * 2], pos: element.pos * 2 })
                initialheap[i].push({ value: initialarray[element.pos * 2 + 1], pos: element.pos * 2 + 1 })
                if (element.pos * 2 === initialarray.length - 1 || element.pos * 2 === initialarray.length) {
                    lastelementchecked = true
                }
            }
            if (lastelementchecked) break;

        }
        return initialheap
    }
    fillTree() {
        // const array = this.state.heap.heap
        let num = Math.floor(Math.random() * 10)
        let actions = this.state.heap.insert({ distance: num })
        // const finalarray = this.heapify(array)
        const initialarray = actions.shift().element
        const initialheap = this.heapify(initialarray)
        const level = Math.floor(Math.log2(initialarray.length - 1))
        const position = (initialarray.length - 1) - (Math.pow(2, level) - 1) - 1
        this.setState({ readyForNext: false, remove: false, heap: this.state.heap, actions: actions, initialheap: initialheap, selected: [initialheap[level][position]] })

    }
    removeSmallest() {

        let actions = this.state.heap.remove().actions
        const initialarray = actions.shift().element
        const level = Math.floor(Math.log2(initialarray.length - 1))
        const position = (initialarray.length - 1) - (Math.pow(2, level) - 1) - 1
        this.setState({ selected: [this.state.initialheap[level][position]], remove: true, actions: actions })
    }

    componentDidUpdate() {
        const element = this.element;
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
        const currentAction = this.state.actions.shift()
        if (currentAction) {
            if (currentAction.action === "swap") {
                let initialarray = currentAction.currentheap

                const level1 = Math.floor(Math.log2(currentAction.element1))
                const position1 = (currentAction.element1) - (Math.pow(2, level1) - 1) - 1
                const level2 = Math.floor(Math.log2(currentAction.element2))
                const position2 = (currentAction.element2) - (Math.pow(2, level2) - 1) - 1
                let selected1 = this.state.initialheap[level1][position1]
                let selected2 = this.state.initialheap[level2][position2]

                const initialheap = this.heapify(initialarray)
                setTimeout(() => {
                    this.setState({ actions: this.state.actions, selected: [selected1, selected2], swappedElements: [selected2, selected1], initialheap: initialheap })
                }, 1000);


            }
            if (currentAction.action === "remove") {
                let initialarray = currentAction.currentheap

                const initialheap = this.heapify(initialarray)
                setTimeout(() => {

                    this.setState({
                        actions: this.state.actions,
                        initialheap: initialheap,
                        remove: false
                    })
                }, 1000);
            }
            if (currentAction.action === "settle") {
                const initialarray = this.state.heap.heap
                const initialheap = this.heapify(initialarray)
                setTimeout(() => {

                    this.setState({
                        actions: this.state.actions,
                        initialheap: initialheap,
                        selected: [],
                        remove: false
                    })
                }, 600);
            }
        }
    }
    updateHeap(colIdx, rowIdx, newvalue) {
        setTimeout(() => {
            let heap = this.state.initialheap
            heap[colIdx][rowIdx].value = newvalue
            this.setState({ initialheap: heap, selected: [] })
        }, 2000);


    }

    contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return { contains: true, pos: i };
            }
        }
        return { contains: false, pos: 0 };
    }
    render() {
        const { width, height, initialheap, selected, swappedElements, remove } = this.state

        return (
            < div key={Math.random()} style={{
                width: "100%",
                display: "inline-block",
                overflowX: "auto"
            }
            } ref={(el) => { this.element = el }}>

                <button onClick={() => this.fillTree()}>
                    Add to Heap
            </button>
                <button onClick={() => this.removeSmallest()}>
                    Remove smallest number from Heap
            </button>
                {
                    initialheap.map((row, rowIdx) => {
                        let elements = []
                        return (
                            <div key={rowIdx} style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                {
                                    row.map((col, colidx) => {

                                        if (col.value)
                                            if (col.value.distance !== undefined) {
                                                col.value = col.value.distance
                                            }
                                        let isSelected = false
                                        let toBeSwappedWith = undefined
                                        for (let element of selected) {
                                            if (element.pos === col.pos) {
                                                isSelected = true
                                                toBeSwappedWith = swappedElements.shift()
                                                break;
                                            }
                                        }
                                        let color = "brown"
                                        if (col.value !== undefined)
                                            elements.push(
                                                <Col key={colidx} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                    <HeapElement remove={remove && rowIdx === 0 && colidx === 0} key={colidx * Math.random()} color={color} value={col.value} width={width} height={height} isSelected={isSelected} toBeSwappedWith={toBeSwappedWith} ></HeapElement>
                                                </Col>)
                                        else {
                                            elements.push(
                                                <Col key={colidx} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                    <div style={{
                                                        width: `${width}px`,
                                                        height: `${height}px`,
                                                        "backgroundColor": "",
                                                        "borderRadius": "200px"
                                                    }}></div>
                                                </Col>)

                                        }
                                        return (<div key={colidx * Math.random()}></div>);
                                    })}
                                {elements}
                            </div>

                        )

                    })
                }

            </div >




        );

    }
}
