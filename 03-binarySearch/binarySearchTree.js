class Node {
  constructor(key = null, value = null, size = 0) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = size;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  size() {
    return this._size(this.root);
  }
  put(key, value) {
    this.root = this._put(this.root, key, value);
  }
  get(key) {
    return this._get(this.root, key);
  }
  min() {
    return this._min(this.root).key;
  }
  max() {
    return this._max(this.root).key;
  }
  floor(key) {
    let node = this._floor(this.root, key);
    if (node === null) return null;
    return node.key;
  }
  ceiling(key) {
    let node = this._ceiling(this.root, key);
    if (node === null) return null;
    return node.key;
  }
  select(k) {
    return this._select(this.root, k).key;
  }
  rank(key) {
    return this._rank(this.root, key);
  }
  removeMin() {
    this.root = this._removeMin(this.root);
  }
  removeMax() {
    this.root = this._removeMax(this.root);
  }
  remove(key) {
    this.root = this._remove(this.root, key);
  }
  preOrder(fn) {
    function preOrder(node, fn) {
      if (node !== null) {
        fn(node);
        preOrder(node.left, fn);
        preOrder(node.right, fn);
      }
    }
    preOrder(this.root, fn);
  }
  inOrder(fn) {
    function inOrder(node, fn) {
      if (node !== null) {
        inOrder(node.left, fn);
        fn(node);
        inOrder(node.right, fn);
      }
    }
    inOrder(this.root, fn);
  }
  postOrder(fn) {
    function postOrder(node, fn) {
      if (node !== null) {
        postOrder(node.left, fn);
        postOrder(node.right, fn);
        fn(node);
      }
    }
    postOrder(this.root, fn);
  }
  levelOrder(fn) {
    if (this.root === null) return;
    let q = [];
    q.push(this.root);
    while (q.length) {
      let node = q[0];
      q.shift();
      fn(node);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  _size(node) {
    if (node === null) return 0;
    else return node.size;
  }
  _get(node, key) {
    if (node === null) return null;
    if (key < node.key) {
      return this._get(node.left, key);
    } else if (key > node.key) {
      return this._get(node.right, key);
    } else {
      return node.value;
    }
  }
  _put(node, key, value) {
    if (node === null) return new Node(key, value, 1);
    if (key < node.key) {
      node.left = this._put(node.left, key, value);
    } else if (key > node.key) {
      node.right = this._put(node.right, key, value);
    } else {
      node.value = value;
    }
    node.size = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }
  _min(node) {
    if (node.left === null) return node;
    else return this._min(node.left);
  }
  _max(node) {
    if (node.right === null) return node;
    else return this._max(node.right);
  }
  _floor(node, key) {
    if (node === null) return null;
    if (key === node.key) return node;
    if (key < node.key) return this._floor(node.left, key);
    let t = this._floor(node.right, key);
    if (t !== null) return t;
    else return node;
  }
  _ceiling(node, key) {
    if (node === null) return null;
    if (key === node.key) return node;
    if (key > node.key) return this._ceiling(node.right, key);
    let t = this._ceiling(node.left, key);
    if (t !== null) return t;
    else return node;
  }
  _select(node, k) {
    if (node === null) return null;
    let size = this._size(node.left);
    if (size > k) return this._select(node.left, k);
    else if (size < k) return this._select(node.right, k - size - 1);
    else return node;
  }
  _rank(node, key) {
    if (node === null) return 0;
    if (key < node.key) return this._rank(node.left, key);
    else if (key > node.key)
      return this._size(node.left) + 1 + this._rank(node.right, key);
    else return this._size(node.left);
  }
  _removeMin(node) {
    if (node.left === null) return node.right;
    node.left = this._removeMin(node.left);
    node.size = this._size(node.left) + 1 + this._size(node.right);
    return node;
  }
  _removeMax(node) {
    if (node.right === null) return node.left;
    node.right = this._removeMax(node.right);
    node.size = this._size(node.left) + 1 + this._size(node.right);
    return node;
  }
  _remove(node, key) {
    if (node === null) return null;
    if (key < node.key) node.left = this._remove(node.left, key);
    else if (key > node.key) node.right = this._remove(node.right, key);
    else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      let t = node;
      node = this._min(t.right);
      node.right = this._removeMin(t.right);
      node.left = t.left;
    }
    node.size = this._size(node.left) + 1 + this._size(node.right);
    return node;
  }
}
