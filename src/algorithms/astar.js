import { getNeighbors } from './dijkstra'
export function astar(grid, start, finish) {
    let openlist = []
    let closedlist = []
    start['g'] = 0
    start.distance = manhattanDistance(start, finish)

    openlist.push(start)
    while (openlist.length > 0) {
        const q = getsmallest(openlist);
        if (q) {
            q.isVisited = true
            closedlist.push(q)
            if (q === finish) return closedlist
            const neighbors = getNeighbors(q, grid);
            for (let neighbor of neighbors) {
                let new_gscore = 0
                if (neighbor.isWall) {
                    continue
                }

                new_gscore = q['g'] + 1;
                let h = manhattanDistance(neighbor, finish)
                if (neighbor.isWeight) {
                    h += 15

                }
                const distance = h + new_gscore

                let found = false
                if (distance < neighbor.distance) {
                    neighbor['g'] = new_gscore
                    neighbor['h'] = h;
                    neighbor.distance = distance
                }
                for (let element of openlist) {
                    if (element === neighbor) {
                        found = true;
                        break;
                    }
                }
                if (found === false) {
                    neighbor.previousNode = q;
                    neighbor.distance = distance
                    openlist.push(neighbor)
                }

            }
        }
    }
    return closedlist


}
function manhattanDistance(node, finish) {
    const x = node.row - finish.row;
    const y = node.col - finish.col;
    const h = Math.abs(x) + Math.abs(y)
    return h
}
function getsmallest(openlist) {
    let smallestSoFar = openlist[0]
    let index = 0
    for (let i = 1; i < openlist.length; i++) {
        if (openlist[i].distance < smallestSoFar.distance) {
            smallestSoFar = openlist[i]
            index = i
        } else if (openlist[i].distance === smallestSoFar.distance) {
            if (openlist[i]['h'] < smallestSoFar['h']) {
                smallestSoFar = openlist[i]
                index = i
            }
        }
    }
    let temp = openlist[0]
    openlist[0] = openlist[index]
    openlist[index] = temp
    return openlist.shift()

}

