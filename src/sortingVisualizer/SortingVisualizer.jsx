import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { bubbleSort } from '../algorithms/bubbleSort'
import ArrayElement from './ArrayElement';
export default class SortingVisualizer extends Component {
    constructor() {
        super();
        this.state = {
            array: [],
            largestSoFar: -Infinity,
            actions: [],
            mergeSelected: [],
            selected: [],
            correctOrder: []
        }
    }
    fillArray() {
        this.state.array.push(7, 6, 5, 4, 3, 2, 1)
        this.setState({
            array: this.state.array, largestSoFar: 7
        })
    }
    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    addElementToArray() {
        let element = Math.floor(Math.random() * 1000) + 1
        this.state.array.push(element)
        if (element > this.state.largestSoFar)
            this.setState({ array: this.state.array, largestSoFar: element })
        else {
            this.setState({ array: this.state.array })
        }
    }
    sort() {
        const actions = bubbleSort(this.state.array);
        this.setState({
            actions: actions
        })
    }
    merge(left, right, leftLimit, rightLimit, sorted, buffer) {
        let i = left;

        //Compare the two sub arrays and merge them in the sorted order
        while (left < leftLimit && right < rightLimit) {
            if (sorted[left] <= sorted[right]) {
                buffer[i++] = sorted[left++];
            } else {
                buffer[i++] = sorted[right++];
            }
        }

        //If there are elements in the left sub arrray then add it to the result
        while (left < leftLimit) {
            buffer[i++] = sorted[left++];
        }

        //If there are elements in the right sub array then add it to the result
        while (right < rightLimit) {
            buffer[i++] = sorted[right++];
        }
    }
    async mergeSort(arr) {
        //Create two arrays for sorting
        let sorted = Array.from(arr);
        let n = sorted.length;
        let buffer = new Array(n);

        for (let size = 1; size < n; size *= 2) {
            for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {

                //Get the two sub arrays
                let left = leftStart,
                    right = Math.min(left + size, n),
                    leftLimit = right,
                    rightLimit = Math.min(right + size, n);
                let selected = []
                for (let i = left; i < leftLimit; i++) {
                    selected.push(arr[i])
                }
                for (let i = right; i < rightLimit; i++) {
                    selected.push(arr[i])
                }
                this.setState({
                    mergeSelected: selected
                })
                await this.sleep(250)
                //Merge the sub arrays
                this.merge(left, right, leftLimit, rightLimit, sorted, buffer);
                const currentState = []
                let i = 0
                for (let element of buffer) {
                    if (element === undefined) {
                        currentState.push(sorted[i])
                    } else {
                        currentState.push(element)
                    }
                    i += 1

                }
                this.setState({
                    array: currentState
                })
            }

            //Swap the sorted sub array and merge them
            let temp = sorted;
            sorted = buffer;
            buffer = temp;

        }
        await this.sleep(500)
        this.setState({
            mergeSelected: []
        })
        return sorted;
    }
    componentDidUpdate() {
        const currentAction = this.state.actions.shift()
        if (currentAction)
            if (currentAction.action === "swap") {
                let selected1 = currentAction.element1
                let selected2 = currentAction.element2
                const currentArray = currentAction.currentArray
                setTimeout(() => {
                    this.setState({ actions: this.state.actions, selected: [selected1, selected2], array: currentArray })
                }, 10);
            } else if (currentAction.action === "settle") {
                setTimeout(() => {
                    const currentArray = currentAction.currentArray
                    this.setState({ actions: this.state.actions, array: currentArray, selected: [] })
                }, 10);
            }

        // const mergeCurrentAction = this.state.correctOrder.shift()
        // if (mergeCurrentAction)
        //     if (mergeCurrentAction.action === "mergeswap") {
        //         [this.state.array[mergeCurrentAction.element1], this.state.array[mergeCurrentAction.element2]] = [this.state.array[mergeCurrentAction.element2], this.state.array[mergeCurrentAction.element1]]
        //         this.setState({
        //             array: this.state.array
        //         })
        //     }

    }
    contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true
            }
        }
        return false;
    }
    copy(array) {
        const newArray = []
        for (let element of array) {
            newArray.push(element)
        }
        return newArray
    }

    render() {
        const { array, largestSoFar, selected, mergeSelected } = this.state
        // console.log(mergeSelected)
        const space = (1 / array.length) * 100
        return (

            < Container style={{ maxWidth: 2000, maxHeight: 500 }}>
                <button onClick={() => this.fillArray()}>
                    Fill Array
            </button>
                <button onClick={() => this.addElementToArray()}>
                    Add to Array
            </button>
                <button onClick={() => this.sort()}>
                    BubbleSort
            </button>
                <button onClick={() => this.mergeSort(this.state.array)}>
                    mergeSort
            </button>
                <Row>

                    {
                        array.map((element, index) => {
                            let isSelected = false
                            let i = 0
                            //console.log("mergeSelected: " + mergeSelected)
                            for (let num of mergeSelected) {
                                if (element === num) {

                                    //console.log("element: " + element + " at index " + index + "  mergeSelected is: " + mergeSelected + "  i is: " + i)
                                    element = mergeSelected[i]
                                    isSelected = true

                                }
                                i = i + 1;
                            }
                            // for (let i = 0; i < mergeSelected; i++) {
                            //     let inspect = mergeSelected[i]
                            //     if (element === inspect) {
                            //         if (index != i) {
                            //             console.log("here")
                            //         }
                            //         isSelected = true

                            //     }
                            // }
                            if (selected)
                                for (let element of selected) {
                                    if (element === index) {
                                        isSelected = true
                                    }
                                }
                            return (
                                <Col key={Math.random()} style={{
                                    width: `${space}%`,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    transform: 'rotate(180deg)'
                                }}>
                                    <ArrayElement key={index * Math.random()} value={element} largestSoFar={largestSoFar} variant={"info"} isSelected={isSelected}></ArrayElement>
                                </Col>

                            );
                        })
                    }


                </Row>


            </Container >

        )
    }
}