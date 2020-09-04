// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path

import MinHeap from "../dataStructures/heap";

export function dijkstra(grid, startNode, finishNode) {
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    let unvisitedNodes=new MinHeap();
    unvisitedNodes.insert(startNode)
    while (unvisitedNodes.heap.length>1) {
        const closestNode = unvisitedNodes.remove();
        // If we encounter a wall, we skip it.
        if (closestNode.isWall) continue;
        // If the closest node is at a distance of infinity,
        // we must be trapped and should therefore stop.
        if (closestNode.distance === Infinity) return visitedNodesInOrder;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if (closestNode === finishNode) return visitedNodesInOrder;
        const neighbors = getNeighbors(closestNode, grid);
        for (const neighbor of neighbors) {
          neighbor.distance = closestNode.distance + 1;
          neighbor.previousNode = closestNode;
          unvisitedNodes.insert(neighbor)
        }
      }
  }
  function getNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }
  
  // Backtracks from the finishNode to find the shortest path.
  // Only works when called *after* the dijkstra method above.
  export function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }
  