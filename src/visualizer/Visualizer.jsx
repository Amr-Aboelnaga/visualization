import { dijkstra, getNodesInShortestPathOrder } from '../algorithms/dijkstra';
import React, { Component } from 'react';
import './Node.css';
import { Button, Container } from 'react-bootstrap';

export default class Visualizer extends Component {
    static staticgrid
    constructor() {
        super();
        Visualizer.staticgrid = []
        this.state = {
            grid: [],
            visitedNodesInOrder: [],
            nodesInShortestPathOrder: [],
            mousedown: false,
            reset: false,
            weightdown: false,
            variant: "outline-info",
            startPressed: false,
            finishPressed: false,
            startCoordinates: { row: 7, col: 15 },
            finishCoordinates: { row: 16, col: 35 },
            calculated: false

        };
    }
    contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return { contains: true, pos: i };
            }
        }
        return { contains: false, pos: 0 };
    }
    getIndex(array, element) {
        if (array)
            for (let i = 0; i < array.length; i++) {
                if (array[i] === element) {
                    return i
                }
            }
        return false;
    }
    componentDidMount() {
        const grid = this.getInitialGrid();
        this.setState({ grid });
        Visualizer.staticgrid = grid
    }
    visualizeDijkstra() {
        const oldgrid = Visualizer.staticgrid
        this.setState({ oldgrid })
        const { grid } = this.state;
        const startNode = grid[this.state.startCoordinates.row][this.state.startCoordinates.col];
        const finishNode = grid[this.state.finishCoordinates.row][this.state.finishCoordinates.col];
        var start = new Date().getTime();
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        var end = new Date().getTime();
        var dur = end - start;
        console.log(dur)
        this.setState({ visitedNodesInOrder })
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        this.setState({ nodesInShortestPathOrder, calculated: true })
        console.log(nodesInShortestPathOrder)
    }
    wallIt(row, col) {
        Visualizer.staticgrid[row][col].isWall = !Visualizer.staticgrid[row][col].isWall
    }
    weightIt(row, col) {
        Visualizer.staticgrid[row][col].isWeight = !Visualizer.staticgrid[row][col].isWeight
    }
    startIt(row, col) {
        Visualizer.staticgrid[row][col].isStart = true
    }
    finishIt(row, col) {
        Visualizer.staticgrid[row][col].isFinish = true

    }
    handleDown(row, col) {
        if (Visualizer.staticgrid[row][col].isStart) {
            this.setState({ mousedown: true, startPressed: true });

        } else if (Visualizer.staticgrid[row][col].isFinish) {
            this.setState({ mousedown: true, finishPressed: true });

        } else
            this.setState({ mousedown: true });
    }
    normalize(row, col) {
        Visualizer.staticgrid[row][col].isStart = false
        Visualizer.staticgrid[row][col].isFinish = false


    }
    handleUp(row, col) {
        if (this.state.startPressed) {
            this.setState({ startCoordinates: { row: row, col: col }, mousedown: false, startPressed: false })

        } else if (this.state.finishPressed) {
            this.setState({ finishCoordinates: { row: row, col: col }, mousedown: false, startPressed: false, finishPressed: false })

        } else
            this.setState({ mousedown: false });
    }

    switchToWeights() {
        let variant = ""
        if (this.state.variant === "outline-info") {
            variant = "danger"
        } else {
            variant = "outline-info"
        }
        this.setState({ variant: variant, weightdown: !this.state.weightdown })
    }
    render() {
        const { grid, visitedNodesInOrder, nodesInShortestPathOrder, mousedown, weightdown, variant, startPressed, finishPressed, calculated } = this.state;
        const { height, width } = this.props

        return (
            <div style={{
                verticalAlign: 'top', display: ' inline-block'
            }}
            >

                <Button variant="outline-info" onClick={() => this.visualizeDijkstra()}>
                    Visualize Dijkstra's Algorithm
            </Button>
                <Button variant="outline-info" onClick={() => this.props.reset()}>
                    Clear Board
            </Button>
                <Button variant={variant} onClick={() => this.switchToWeights()}>
                    Weights Down
            </Button>
                < Container style={{ maxWidth: width - 100, maxHeight: height - 50, minWidth: width - 100, minHeight: height - 50, marginTop: '100px', justifyContent: 'center' }}
                >
                    {
                        grid.map((row, rowIdx) => {
                            return (
                                <div className="row" key={rowIdx} style={{ justifyContent: 'center' }}>
                                    {row.map((node, nodeIdx) => {
                                        const { row, col, isFinish, isStart, isWall, isVisited, weight } = node;
                                        let isPath = this.getIndex(nodesInShortestPathOrder, node)
                                        if (!!isPath) {
                                            isPath += visitedNodesInOrder.length
                                        }
                                        return (
                                            <Node
                                                key={nodeIdx}
                                                col={col}
                                                isFinish={isFinish}
                                                isStart={isStart}
                                                isWall={isWall}
                                                row={row}
                                                isVisited={isVisited}
                                                isPath={isPath}
                                                wallIt={this.wallIt}
                                                weightIt={this.weightIt}
                                                startPressed={startPressed}
                                                finishPressed={finishPressed}
                                                startIt={this.startIt}
                                                finishIt={this.finishIt}
                                                mousedown={mousedown}
                                                weightdown={weightdown}
                                                mousedownHandle={(row, col) => this.handleDown(row, col)}
                                                mouseUpHandle={(row, col) => this.handleUp(row, col)}
                                                normalize={(row, col) => { this.normalize(row, col) }}
                                                weight={weight}
                                                calculated={calculated}
                                                recalculate={() => this.visualizeDijkstra()}
                                                delay={this.getIndex(visitedNodesInOrder, node)}
                                            ></Node>
                                        );

                                    })}
                                </div>
                            );
                        })
                    }
                </Container>
            </div>
        );
    }
    getInitialGrid() {
        const grid = [];
        for (let row = 0; row < 20; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                const Node = this.createNode(col, row);
                currentRow.push(Node);
            }
            grid.push(currentRow);
        }
        return grid;
    };

    createNode(col, row) {
        return {
            col,
            row,
            isStart: row === this.state.startCoordinates.row && col === this.state.startCoordinates.col,
            isFinish: row === this.state.finishCoordinates.row && col === this.state.finishCoordinates.col,
            distance: Infinity,
            isWeight: false,
            isVisited: false,
            isWall: false,
            previousNode: null,
        };
    };
}






export class Node extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            extraClassName: this.props.isFinish
                ? 'node-finish'
                : this.props.isStart
                    ? 'node-start'
                    : this.props.isWall
                        ? 'node-wall'
                        : this.props.isWeight
                            ? 'node-weight'
                            : '',
            visited: false,
            pathAnimated: false,
            isWall: this.props.isWall,
            isWeight: this.props.isWeight,
            isStart: this.props.isStart
        }
    }
    switch() {
        setTimeout(() => {
            const className = this.state.isWeight ? 'node-visited-weighted' : 'node-visited'
            this.setState({
                extraClassName: className,
                visited: true
            })
        }, this.props.delay * 10);
    }
    switchPath() {
        setTimeout(() => {
            this.setState({
                extraClassName: 'node-shortest-path',
                pathAnimated: true
            })
        }, this.props.isPath * 10);
    }
    beWeight() {
        if (this.state.isWeight) {
            this.setState({
                extraClassName: '',
                isWeight: false
            })
        } else {
            this.setState({
                extraClassName: 'node-weight',
                isWeight: true
            })
        }
    }
    beWall() {
        if (this.state.isWall) {
            this.setState({
                extraClassName: '',
                isWall: false
            })
        } else {
            this.setState({
                extraClassName: 'node-wall',
                isWall: true
            })
        }

    }
    beFinish() {
        this.setState({ extraClassName: 'node-finish', isStart: false })

    }
    beStart() {
        this.setState({ extraClassName: 'node-start', isStart: true })
    }
    normalize() {
        this.setState({ extraClassName: '', isStart: false, isFinish: false })
    }
    render() {
        const {
            col,
            wallIt,
            mousedownHandle,
            mouseUpHandle,
            row,
            weightIt,
            startIt,
            normalize,
            finishIt,

        } = this.props;

        if (this.props.isVisited && this.state.visited === false) {
            this.switch()
        }
        if (this.props.isPath !== false && this.state.pathAnimated === false) {
            this.switchPath()
        }
        return (
            <div
                id={`node-${row}-${col}`}
                className={`node ${this.state.extraClassName}`}
                onMouseDown={() => {
                    if (this.props.startPressed) {
                        this.beStart();
                        startIt(row, col)
                    } else if (this.props.finishPressed) {
                        this.beFinish();
                        finishIt(row, col)

                    } else if (this.props.weightdown) {
                        if (!this.props.isStart) {
                            this.beWeight();
                            weightIt(row, col);
                        }
                    } else {
                        if (!this.props.isStart) {
                            this.beWall();
                            wallIt(row, col);
                        }
                    }
                    mousedownHandle(row, col);

                }}
                onMouseUp={() => mouseUpHandle(row, col)}
                onMouseOver={() => {
                    if (!this.props.isStart && !this.props.isFinish)
                        if (this.props.mousedown) {
                            if (this.props.startPressed) {
                                this.beStart();
                                startIt(row, col)
                            } else if (this.props.finishPressed) {
                                this.beFinish();
                                finishIt(row, col)

                            }
                            else if (this.props.weightdown) {
                                this.beWeight();
                                weightIt(row, col);
                            } else {
                                this.beWall();
                                wallIt(row, col);
                            }

                        }
                }}
                onMouseLeave={() => {
                    if (this.props.mousedown) {
                        if (this.props.startPressed || this.props.finishPressed) {
                            this.normalize()
                            normalize(row, col)


                        }
                    }
                }}
            >
            </div>
        );
    }
}  
