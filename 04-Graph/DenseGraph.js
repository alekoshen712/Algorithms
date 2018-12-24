class DenseGraph {
  constructor(n, directed = false) {
    this.n = n; // 顶点
    this.m = 0; // 边
    this.directed = directed; // 是否有向
    this.g = []; // 邻接矩阵
    for (let i = 0; i < n - 1; i++) {
      this.g.push(new Array(n).fill(false));
    }
  }
  isLegal(v, m) {
    return v >= 0 && v < this.n && m >= 0 && m < this.n;
  }
  addEdge(v, w) {
    if (!this.isLegal(v, w)) throw Error("v or w is illegal");
    if (this.hasEdge(v, w)) return;
    this.g[v][w] = true;
    if (!this.directed) this.g[w][v] = true;
    this.m++;
  }
  hasEdge(v, w) {
    if (!this.isLegal(v, w)) throw Error("v or w is illegal");
    return this.g[v][w];
  }
  each(v, fn) {
    this.g[v].forEach((i, idx) => {
      if (i) fn(idx);
    });
  }
}
