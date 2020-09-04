export default class MinHeap {
    heap = [];
    constructor() {
        this.heap = [null];
        this.set=new Set(null)
    }
    constructHeap(array) {
        for (let element of array) {
            this.insert(element)
        }
    }
    insert(num) {
        if(this.set.has(num))return;
        this.heap.push(num);
        this.set.add(num)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1;
            while (this.heap[index].distance < this.heap[Math.floor(index / 2)].distance) {
                if (index >= 1) {
                    [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]];
                    index = Math.floor(index / 2);
                    if (index === 1) {
                        break;
                    }
                }
            }
        }
    }
    remove() {
        if (this.heap.length > 1) {
            if (this.heap.length === 2) {
                return this.heap.pop()
            }
            let smallest = this.heap[1]
            this.heap[1] = this.heap.pop()
            let index = 1
            let left = index * 2;
            let right = index * 2 + 1
            if (this.heap.length === 3) {
                if (this.heap[1].distance > this.heap[2].distance) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
            } else if (this.heap.length > 2) {
                while (this.heap[index].distance > this.heap[left].distance || this.heap[index].distance > this.heap[right].distance) {
                    if (this.heap[left].distance < this.heap[right].distance) {
                        let temp = this.heap[index]
                        this.heap[index] = this.heap[left]
                        this.heap[left] = temp
                        index = left
                    } else {
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
            return smallest;
        } else {
            return;
        }

    }
}

