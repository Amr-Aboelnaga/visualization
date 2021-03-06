import React, { Component } from 'react';
import './HeapBlock.css';
import { Col, Button, Container } from 'react-bootstrap';
import MinHeap from '../dataStructures/heap';
import HeapElement from './HeapElement';

export default class HeapBlock extends Component {
    constructor(props) {
        super(props);
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
            remove: false,
            updateExternalArray: this.props.updateExternalArray
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
    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    async fillTreeSystemic(array) {
        for (let element of array) {
            this.fillTree(element)
            await this.sleep(3000)
        }
        this.setState({ array: this.state.array })
        await this.sleep(1000)
        for (let i = 0; i < array.length; i++) {
            this.state.updateExternalArray(this.removeSmallest(), i)
            await this.sleep(2500)
        }

    }
    fillTree(number) {
        // const array = this.state.heap.heap
        let num = number ? number : Math.floor(Math.random() * 10)
        let actions = this.state.heap.insert({ distance: num })
        // const finalarray = this.heapify(array)
        const initialarray = actions.shift().element
        const initialheap = this.heapify(initialarray)
        const level = Math.floor(Math.log2(initialarray.length - 1))
        const position = (initialarray.length - 1) - (Math.pow(2, level) - 1) - 1
        this.setState({ readyForNext: false, remove: false, heap: this.state.heap, actions: actions, initialheap: initialheap, selected: [initialheap[level][position]] })

    }
    removeSmallest() {
        if (this.state.heap.heap.length > 1) {
            let removal = this.state.heap.remove()
            let actions = removal.actions
            const initialarray = actions.shift().element
            const level = Math.floor(Math.log2(initialarray.length - 1))
            const position = (initialarray.length - 1) - (Math.pow(2, level) - 1) - 1
            this.setState({ selected: [this.state.initialheap[level][position]], remove: true, actions: actions })

            return removal.result.distance
        }
    }
    componentDidMount() {
        if (this.props.array) {
            this.fillTreeSystemic(this.props.array)
        }
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


    contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return { contains: true, pos: i };
            }
        }
        return { contains: false, pos: 0 };
    }
    render() {
        const { width, height, initialheap, selected, swappedElements, remove, updateExternalArray } = this.state
        const windowWidth = this.props.width
        const windowHeight = this.props.height
        let buttons = () => {
            return (<div>
                <Button variant="outline-info" onClick={() => this.fillTree()}>
                    Add to Heap
            </Button>
                <Button variant="outline-info" onClick={() => this.removeSmallest()}>
                    Remove smallest number from Heap
            </Button></div>)
        }
        if (updateExternalArray) {
            buttons = () => {
                return (<></>)
            }
        }
        return (
            <div style={{
                verticalAlign: 'top', display: ' inline-block'
            }}>{buttons()}
                < Container key={Math.random()} style={{
                    width: "100%",
                    display: "inline-block",
                    overflowX: "auto",
                    maxWidth: windowWidth - 100, maxHeight: windowHeight - 50, minWidth: windowWidth - 100, minHeight: windowHeight - 50, marginTop: '100px'

                }
                } ref={(el) => { this.element = el }}>



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
                                            let color = "teal"
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

                </Container >

            </div>






        );

    }
}
