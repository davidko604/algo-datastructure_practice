export class Node {
  constructor(
    public value: number,
    public left: Node | null = null,
    public right: Node | null = null
  ) {}
}

export class BinarySearchTree {
  root: Node | null = null
  constructor() {}
  insert(val) {
    const newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode
      return this.root
    }
    let currentNode = this.root
    let foundNode = false

    while (foundNode === false) {
      if (val === currentNode.value) {
        return undefined
      }
      if (val > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right
        } else {
          currentNode.right = newNode
          foundNode = true
          return currentNode.right
        }
      }
      if (val < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          currentNode.left = newNode
          foundNode = true
          return currentNode.left
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false
    let current = this.root,
      found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }
  contains(value) {
    if (this.root === null) return false
    var current = this.root,
      found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
  bfs() {
    let currentNode = this.root
    let queue = [currentNode]
    let visited = []

    while (queue.length > 0) {
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
      visited.push(queue[0].value)
      queue.shift()
      currentNode = queue[0]
    }
    return visited
  }
  dfsPreOrder() {}
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

tree.insert(22)
tree.insert(1)
tree.insert(8)

console.log(JSON.stringify(tree, null, 4))

console.log(JSON.stringify(tree.find(9), null, 4))

const bfs = tree.bfs()

console.log(bfs)
