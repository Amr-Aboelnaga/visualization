import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import React, { Component } from 'react';
import './Node.css';

const START_NODE_ROW = 1;
const START_NODE_COL = 1;
const FINISH_NODE_ROW = 19;
const FINISH_NODE_COL = 49;
export default class Visualizer extends Component {
    static staticgrid
    constructor() {
        super();
        Visualizer.staticgrid=[]
        this.state = {
            grid: [],
            visitedNodesInOrder: [],
            nodesInShortestPathOrder:[],
            mousedown:false
        };
    }
    contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return {contains:true,pos:i};
            }
        }
        return {contains:false,pos:0};
    }
    getIndex(array,element){
        if(array)
        for(let i =0;i<array.length;i++){
            if(array[i]===element){
                return i
            }
        }
        return false;
    }
    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({ grid });
        Visualizer.staticgrid=grid
    }
    visualizeDijkstra(){
        const oldgrid=Visualizer.staticgrid
        this.setState({oldgrid})
        const {grid} = this.state;
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        var start = new Date().getTime();
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        var end = new Date().getTime();
        var dur = end - start;
        console.log(dur)
        this.setState({visitedNodesInOrder})
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        this.setState({nodesInShortestPathOrder})
        console.log(nodesInShortestPathOrder)
    }
     wallIt(row,col){
        Visualizer.staticgrid[row][col].isWall=true
    }
    handleDown(){
        this.setState({ mousedown: true });
    }
    handleUp(){
        this.setState({ mousedown: false });
    }
    render() {
        const { grid, visitedNodesInOrder,nodesInShortestPathOrder,mousedown } = this.state;
        return (
            <>
                <button onClick={() => this.visualizeDijkstra()}>
                    Visualize Dijkstra's Algorithm
            </button>
                <div className="grid">
                {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall,isVisited} = node;
                    let isPath=this.getIndex(nodesInShortestPathOrder,node)
                    if(!!isPath){
                        isPath+=visitedNodesInOrder.length
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
                          mousedown={mousedown}
                          mousedownHandle={() => this.handleDown()}
                          mouseUpHandle={()=>this.handleUp()}
                          delay={this.getIndex(visitedNodesInOrder,node)}
                          ></Node>
                      );
                  
                })}
              </div>
            );
          })}
                </div>
            </>
        );
    }
}





const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const Node=createNode(col, row);
        currentRow.push(Node);
      }
      grid.push(currentRow);
    }
    return grid;
  };
  
  const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };


export class NodeElement{
    col
    row
    isStart
    isFinish
    distance
    isVisited
    isWall
    previousNode
    constructor(col,row){
        this.col=col
        this.row=row
        this.isStart= row === START_NODE_ROW && col === START_NODE_COL
        this.isFinish= row === FINISH_NODE_ROW && col === FINISH_NODE_COL
        this.distance= Infinity
        this.isVisited= false
        this.isWall= false
        this.previousNode= null
    }
}
NodeElement.prototype.valueOf = function () {
    return this.distance;
};

  
export  class Node extends Component {
    constructor(props){
        super(props)
        this.state= 
        {
            extraClassName:this.props.isFinish
        ? 'node-finish'
        : this.props.isStart
        ? 'node-start'
        : this.props.isWall
        ? 'node-wall'
        :'',
    visited:false,
    pathAnimated:false,
    isWall:this.props.isWall
}
    }
    switch(){
        setTimeout(() => {
            this.setState({
                extraClassName:'node-visited',
                visited:true
            })
        }, this.props.delay);
        
        
    }
    switchPath(){
        setTimeout(() => {
            this.setState({
                extraClassName:'node-shortest-path',
                pathAnimated:true
            })
        }, this.props.isPath);
    }
    beWall(){
        this.setState({
            extraClassName:'node-wall',
            isWall:true
        })
    }
    render() {
      const {
        col,
        isFinish,
        isStart,
        isWall,
        wallIt,
        mousedownHandle,
        mouseUpHandle,
        row,
        isVisited
      } = this.props;
     if(this.props.isVisited&&this.state.visited===false){
         this.switch()
     }
     if(this.props.isPath!==false&&this.state.pathAnimated===false){
        this.switchPath()
     }
      return (
        <div
          id={`node-${row}-${col}`}
          className={`node ${this.state.extraClassName}`}
          onMouseDown={()=>{ this.beWall();
            wallIt(row,col);mousedownHandle()}}
            onMouseUp={() => mouseUpHandle()}

        //   onMouseEnter={()=>{if(this.props.mousedown){
        //       this.beWall();
        //       wallIt(row,col)
        //   }
        //   }}
          onMouseOver={()=>{if(this.props.mousedown){
            this.beWall();
            wallIt(row,col)
        }
        }}
          
         ></div>
      );
    }
  }  
