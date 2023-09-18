import Node from './Node';
import Queue from './Queue';

export default class Tree {
  constructor(array) {
    this.array = Tree.cleanArray(array);
    this.tree = null;
    this.buildTree(this.array);
  }

  static cleanArray(array) {
    return array.filter((item, index) => array.indexOf(item) === index).sort();
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    this.tree = node;
    return node;
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(
        node.left,
        `${prefix}${isLeft ? '    ' : '│   '}`,
        true,
      );
    }
  }

  insertNode(data) {
    this.tree = Tree.insertRec(this.tree, data);
  }

  static insertRec(root, data) {
    if (root == null) {
      return new Node(data);
    }

    if (data < root.data) {
      root.left = this.insertRec(root.left, data);
    } else if (data > root.data) {
      root.right = this.insertRec(root.right, data);
    }

    return root;
  }

  deleteNode(data) {
    this.tree = Tree.deleteRec(this.tree, data);
  }

  static deleteRec(root, data) {
    if (root == null) {
      return root;
    }

    if (root.data > data) {
      root.left = this.deleteRec(root.left, data);
      return root;
    } if (root.data < data) {
      root.right = this.deleteRec(root.right, data);
      return root;
    }

    if (root.left == null) {
      const current = root.right;
      return current;
    } if (root.right == null) {
      const current = root.left;
      return current;
    }

    let succParent = root;
    let successor = root.right;
    while (successor.left !== null) {
      succParent = successor;
      successor = successor.left;
    }

    if (succParent !== root) {
      succParent.left = successor.right;
    } else {
      succParent.right = successor.right;
    }

    root.data = successor.data;
    return root;
  }

  findNode(data) {
    return (
      !Tree.findRec(this.tree, data)) ? `Node ${data} not found.`
      : Tree.findRec(this.tree, data);
  }

  static findRec(root, data) {
    if (root == null || root.data === data) {
      return root;
    }

    if (root.data < data) {
      return this.findRec(root.right, data);
    }

    return this.findRec(root.left, data);
  }

  levelOrder() {
    return Tree.levelOrderRec(this.tree);
  }

  static levelOrderRec(root) {
    const result = [];

    const levelOrder = () => {
      if (root == null) {
        return;
      }

      const queue = new Queue();
      queue.enqueue(root);

      while (!queue.isEmpty()) {
        const current = queue.dequeue();
        result.push(current.data);

        if (current.left != null) {
          queue.enqueue(current.left);
        }
        if (current.right != null) {
          queue.enqueue(current.right);
        }
      }
    };

    levelOrder();
    return result;
  }

  inOrder() {
    return Tree.inOrderRec(this.tree);
  }

  static inOrderRec(root) {
    const result = [];

    const inOrder = (node) => {
      if (node != null) {
        inOrder(node.left);
        result.push(node.data);
        inOrder(node.right);
      }
    };

    inOrder(root);
    return result;
  }

  preOrder() {
    return Tree.preOrderRec(this.tree);
  }

  static preOrderRec(root) {
    const result = [];

    const preOrder = (node) => {
      if (node == null) {
        return;
      }

      result.push(node.data);
      preOrder(node.left);
      preOrder(node.right);
    };

    preOrder(root);
    return result;
  }

  postOrder() {
    return Tree.postOrderRec(this.tree);
  }

  static postOrderRec(root) {
    const result = [];

    const postOrder = (node) => {
      if (node == null) {
        return;
      }

      postOrder(node.left);
      postOrder(node.right);
      result.push(node.data);
    };

    postOrder(root);
    return result;
  }

  findHeight(x) {
    const height = Tree.findHeightRec(this.tree, x);
    if (height !== undefined) {
      return `Height: ${height}`;
    }
    return `Node ${x} not found.`;
  }

  static findHeightRec(root, x) {
    let height;

    const findHeight = (node, y) => {
      if (node == null) {
        return -1;
      }

      const leftHeight = findHeight(node.left, y);
      const rightHeight = findHeight(node.right, y);
      const answer = Math.max(leftHeight, rightHeight) + 1;

      if (node.data === y) {
        height = answer;
      }

      return answer;
    };

    findHeight(root, x);
    return height;
  }

  findDepth(x) {
    const depth = Tree.findDepthRec(this.tree, x);
    if (depth >= 0) {
      return `Depth: ${depth}`;
    }
    return `Node ${x} not found.`;
  }

  static findDepthRec(root, x) {
    if (root == null) {
      return -1;
    }

    let depth = -1;
    if ((root.data === x)
    || (depth = this.findDepthRec(root.left, x)) >= 0
    || (depth = this.findDepthRec(root.right, x)) >= 0) {
      return depth + 1;
    }

    return depth;
  }

  isBalanced(root) {
    if (root == null) {
      return true;
    }

    const leftHeight = Tree.height(root.left);
    const rightHeight = Tree.height(root.right);

    if (Math.abs(leftHeight - rightHeight) <= 1
    && this.isBalanced(root.left) === true
    && this.isBalanced(root.right) === true) {
      return true;
    }

    return false;
  }

  static height(root) {
    if (root == null) {
      return 0;
    }

    return Math.max(
      this.height(root.left),
      this.height(root.right),
    ) + 1;
  }

  rebalance() {
    return this.buildTree(this.inOrder());
  }
}
