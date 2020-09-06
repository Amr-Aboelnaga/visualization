export default class MinHeap {
    heap = [];
    visualize = true;
    constructor(visualize) {
        this.heap = [null];
        this.set = new Set(null)
        this.visualize = visualize
    }
    constructHeap(array) {
        for (let element of array) {
            this.insert(element)
        }
    }
    copy() {
        if (!this.visualize) { return }
        let currentheap = []
        for (let element of this.heap) {
            currentheap.push(element);
        }
        return currentheap
    }
    insert(num) {
        let actions = []
        if (this.set.has(num)) return;
        this.heap.push(num);
        this.set.add(num)
        const oldarray = this.copy()
        actions.push({ action: "oldarray", element: oldarray })

        if (this.heap.length > 2) {
            let index = this.heap.length - 1;
            while (this.heap[index].distance < this.heap[Math.floor(index / 2)].distance) {
                if (index >= 1) {
                    [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]];
                    const currentheap = this.copy()
                    actions.push({ action: "swap", element1: Math.floor(index / 2), element2: index, currentheap: currentheap })
                    index = Math.floor(index / 2);
                    if (index === 1) {
                        return actions;
                    }
                }
            }
        }
        return actions;
    }
    remove() {
        let actions = []
        const oldarray = this.copy()
        actions.push({ action: "oldarray", element: oldarray })

        if (this.heap.length > 1) {
            if (this.heap.length === 2) {
                const currentheap = this.copy()
                actions.push({ action: "remove", element: 0, currentheap: currentheap })
                let result = { actions: actions, result: this.heap.pop() }
                return result
            }
            let smallest = this.heap[1]
            this.heap[1] = this.heap.pop()
            let currentheap = this.copy()
            actions.push({ action: "remove", element: 0, currentheap: currentheap })

            let index = 1
            let left = index * 2;
            let right = index * 2 + 1
            if (this.heap.length === 3) {
                if (this.heap[1].distance > this.heap[2].distance) {
                    const currentheap = this.copy();
                    actions.push({ action: "swap", element1: 1, element2: 2, currentheap: currentheap });
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]

                }
            } else if (this.heap.length > 2) {
                while (this.heap[index].distance >= this.heap[left].distance || this.heap[index].distance >= this.heap[right].distance) {
                    if (this.heap[left].distance <= this.heap[right].distance) {
                        const currentheap = this.copy()
                        actions.push({ action: "swap", element1: index, element2: left, currentheap: currentheap })
                        let temp = this.heap[index]
                        this.heap[index] = this.heap[left]
                        this.heap[left] = temp
                        index = left

                    } else {
                        const currentheap = this.copy()
                        actions.push({ action: "swap", element1: index, element2: right, currentheap: currentheap })
                        let temp = this.heap[index]
                        this.heap[index] = this.heap[right]
                        this.heap[right] = temp
                        index = right

                    }
                    left = index * 2;
                    right = index * 2 + 1;
                    if (this.heap[left] === undefined || this.heap[right] === undefined) {
                        break;
                    }
                }
            }
            currentheap = this.copy()
            actions.push({ action: "settle", currentheap: currentheap })
            let result = { actions: actions, result: smallest }
            return result
        } else {
            return;
        }

    }
}

