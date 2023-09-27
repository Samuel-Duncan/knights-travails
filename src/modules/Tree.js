import Node from './Node';
import Queue from './Queue';

export default class Tree {
  constructor(root) {
    this.root = new Node(root);
  }

  BFS(fn) {
    const array = [this.root];
    while (array.length) {
      const node = array.shift();

      array.push(...node.children);
      fn(node);
    }
  }
}
