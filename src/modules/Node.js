export default class Node {
  constructor(data) {
    this.data = data;
    this.descendants = [];
  }

  add(data) {
    this.descendants.push(new Node(data));
  }

  remove(data) {
    this.children = this.descendants.filter((node) => node.data !== data);
  }
}
