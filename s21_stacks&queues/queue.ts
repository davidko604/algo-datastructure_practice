export class Node {
  constructor(public value: number | string, public next: Node | null = null) {}
}

export class Queue {
  first: Node | null = null
  last: Node | null = null
  size = 0
  constructor() {}
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  dequeue() {
    if (!this.first) return null

    let temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}
