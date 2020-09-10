export function bubbleSort(array) {
    let actions = []
    for (let i = 0; i < array.length; i++) {
        let swapped = false;
        for (let j = 0; j < array.length; j++) {
            if (j + 1 === array.length) {
                break;
            }
            if (array[j] > array[j + 1]) {
                const currentArray = copy(array);
                actions.push({ action: "swap", element1: j, element2: j + 1, currentArray: currentArray });
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                swapped = true
            }
        }
        if (swapped === false) {
            const currentArray = copy(array);
            actions.push({ action: "settle", currentArray: currentArray });
            return actions
        }
    }
    const currentArray = copy(array);
    actions.push({ action: "settle", currentArray: currentArray });
    return actions
}
export function copy(array) {
    const newArray = []
    for (let element of array) {
        newArray.push(element)
    }
    return newArray
}

