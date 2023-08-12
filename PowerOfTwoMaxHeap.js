function createPowerOfTwoMaxHeap(power) {
    const heap = [];
    
    function bubbleUp(index) {
        const parentIndex = Math.floor((index - 1) / power);
        while (index > 0 && heap[index] > heap[parentIndex]) {
            swap(index, parentIndex);
            index = parentIndex;
        }
    }

    function trickleDown(index) {
        let maxChildIndex = findMaxChildIndex(index);
        while (maxChildIndex !== -1 && heap[index] < heap[maxChildIndex]) {
            swap(index, maxChildIndex);
            index = maxChildIndex;
            maxChildIndex = findMaxChildIndex(index);
        }
    }

    function findMaxChildIndex(parentIndex) {
        let maxChildIndex = -1;
        const startIndex = parentIndex * power + 1;
        const endIndex = Math.min(startIndex + power, heap.length);

        for (let i = startIndex; i < endIndex; i++) {
            if (heap[i] > heap[maxChildIndex] || maxChildIndex === -1) {
                maxChildIndex = i;
            }
        }

        return maxChildIndex;
    }

    function swap(i, j) {
        [heap[i], heap[j]] = [heap[j], heap[i]];
    }

    function insert(value) {
        heap.push(value);
        bubbleUp(heap.length - 1);
    }

    function popMax() {
        if (heap.length === 0) {
            throw new Error("Heap is empty");
        }

        const max = heap[0];
        const lastIdx = heap.length - 1;
        heap[0] = heap[lastIdx];
        heap.pop();

        if (heap.length !== 0) {
            trickleDown(0);
        }

        return max;
    }

    return {
        insert,
        popMax
    };
}

const heap = createPowerOfTwoMaxHeap(2);
heap.insert(8);
heap.insert(12);
heap.insert(5);
heap.insert(20);

console.log("Max:", heap.popMax());
console.log("Max:", heap.popMax());
