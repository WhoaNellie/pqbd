interface Array<T> {
  qoq(): Array<T>;
  bob(x:T): number;
}

Array.prototype.qoq = function <T>(): Array<T> {
  return this.shift();
};

Array.prototype.bob = function <T>(x:T): number {
  return this.push(x);
};

let testt = [1, 2, 3, 4];

console.log(testt.bob(2));
console.log(testt);