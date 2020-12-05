// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  //   traverse() {
  //     let current = this.head
  //     while (current) {
  //       console.log(current.val)
  //       current = current.next
  //     }
  //   }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let current = this.head
    this.head = current.next
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    this.length--
    return current
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || this.length <= index) {
      return null
    }
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
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
    const temp = previousNode.next
    previousNode.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let previousNode = this.get(index - 1)
    let removed = previousNode.next
    previousNode.next = removed.next
    this.length--
    return removed
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let previous = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = previous
      previous = node
      node = next
    }
    return this
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

// var first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

var list = new SinglyLinkedList()
list.push('HELLO')
list.push('GOODBYE')
list.push('FINAL GOODBYE')
console.log('list before pop:', list)

// list.pop()
// list.shift()
list.unshift('hahaha')
list.push('ANOTHER ONE!')

console.log('list after pop:', list)
console.log('get(2)', list.get(2))
list.reverse()
console.log('list after reverse():', list)

// console.log('list.head.next.next:', list.head.next.next)
