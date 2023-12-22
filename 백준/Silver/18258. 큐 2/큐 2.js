const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => x.replace('\r', ''))

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data) {
        const node = new Node(data)
        if (this.head === null) {
            this.head = node;
            this.head.next = null;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length += 1;
    }
    pop() {
        if (this.empty() == 1) return -1
        const popItem = this.head;
        this.head = this.head.next;
        this.length -= 1;
        return popItem.data;
    }

    toArray() {
        const result = [];

        let node = this.head;
        while (node) {
            result.push(node.data);
            node = node.next;
        }
        return result;
    }
    empty() {
        if (this.length === 0) {
            return 1;
        } else {
            return 0;
        }
    }
    front() {
        if (this.empty() == 1) {
            return -1;
        }
        return this.head.data
    }
    back() {
        if (this.empty() == 1) {
            return -1;
        }
        return this.tail.data
    }
    size() {
        return this.length
    }
}

let queue = new Queue()
let answer = []

for (let i = 0; i < n; i++) {
    let [command, num] = input[i].split(' ')

    switch (command) {
        case 'push':
            queue.push(num)
            break;
        case 'pop':
            answer.push(queue.pop())
            break;
        case 'size':
            answer.push(queue.size())
            break
        case 'empty':
            answer.push(queue.empty())
            break
        case 'front':
            answer.push(queue.front())
            break
        case 'back':
            answer.push(queue.back())
            break;
    }
}
console.log(answer.join('\n'))