let generateRandomInt = require("../until").generateRandomInt;
class SparseGraph {
  constructor(n, directed = false) {
    this.n = n; // 顶点
    this.m = 0; // 边
    this.directed = directed; // 是否有向
    this.g = []; // 邻接表
    for (let i = 0; i < n; i++) {
      this.g.push([]);
    }
  }
  isLegal(v, m) {
    return v >= 0 && v < this.n && m >= 0 && m < this.n;
  }
  addEdge(v, w) {
    if (!this.isLegal(v, w)) throw Error("v or w is illegal");
    if (this.hasEdge(v, w)) return;
    this.g[v].push(w);
    if (v !== w && !this.directed) this.g[w].push(v);
    this.m++;
  }
  hasEdge(v, w) {
    if (!this.isLegal(v, w)) throw Error("v or w is illegal");
    for (let i = 0; i < this.g[v].length; i++) {
      if (this.g[v][i] === w) {
        return true;
      }
    }
    return false;
  }
  each(v, fn) {
    this.g[v].forEach(i => {
      fn(i);
    });
  }
}
