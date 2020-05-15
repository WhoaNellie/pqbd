interface Array<T> {
  qoq(): Array<T>;
  bob(x:T): number;
  dod(x:T): number;
}

Array.prototype.qoq = function <T>(): Array<T> {
  return this.shift();
};

Array.prototype.bob = function <T>(x:T): number {
  return this.push(x);
};

Array.prototype.dod = function <T>(x:T): number {
  return this.unshift(x);
};
