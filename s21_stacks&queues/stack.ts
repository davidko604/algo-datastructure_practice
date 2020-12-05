export class Node {
  constructor(public value: number | string, public next: Node | null = null) {}
}

export class Stack {
  first: Node | null = null
  last: Node | null = null
  size = 0
  constructor() {}
  push(val) {
    let newNode = new Node(val)

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }
  pop() {
    if (this.size === 0) {
      return null
    }
    let temp = this.first
    if (this.first === this.last) return (this.last = null)
    this.first = this.first.next
    this.size--
    return temp.value
  }
}
