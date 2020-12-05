export class Node {
  constructor(
    public val: number | string,
    public next: Node | null = null,
    public prev: Node | null = null
  ) {}
}

export class DoublyLinkedList {
  head: Node | null = null
  tail: Node | null = null
  length = 0
  constructor() {}
  push(val) {
    let newNode = new Node(val)
    let prevNode = this.tail

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      prevNode.next = newNode
      newNode.prev = prevNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (!this.head) return undefined
    let shiftedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }
  unshift(val) {
    let newNode = new Node(val)
    let nextNode = this.head
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      nextNode.prev = newNode
      newNode.next = nextNode
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    const tailIndex = this.length - 1
    const middleIndex = Math.min(this.length - 1 / 2)
    if (index < 0 || this.length <= index) {
      return null
    }
    if (index > middleIndex) {
      let counter = tailIndex
      let current = this.tail
      while (counter !== index) {
        current = current.prev
        counter--
      }
      return current
    } else {
      let counter = 0
      let current = this.head
      while (counter !== index) {
        current = current.next
        counter++
      }
      return current
    }
  }
  set(index, val) {
    const node = this.get(index)
    if (node) {
      node.val = val
      return true
    } else {
      return false
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) {
      this.push(val)
      return true
    }
    if (index === 0) {
      this.unshift(val)
      return true
    }
    const previousNode = this.get(index - 1)
    const newNode = new Node(val)
    const nextNode = previousNode.next
    previousNode.next = newNode
    newNode.prev = previousNode
    newNode.next = nextNode
    nextNode.prev = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let removedNode = this.get(index)
    let previousNode = removedNode.prev
    let nextNode = removedNode.next
    previousNode.next = nextNode
    nextNode.prev = previousNode
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next = null
    let previous = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = previous
      node.prev = next
      previous = node
      node = next
    }
    return this
    // input
    // zero <-> first <-> second <-> third <-> fourth

    // output
    // fourth <-> third <-> second <-> first <-> zero
  }
  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

const list = new DoublyLinkedList()
list.push('first')
list.push('second')
list.push('third')
list.push('fourth')

console.log('list:', list)

list.unshift('zero')
console.log('list after shift:', list)
// console.log('list.get(2)', list.get(2))
list.print()
list.reverse()
console.log('list:', list)

// list.print()
