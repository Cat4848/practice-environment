const list = [99, 98, 97];
const iterable = list[Symbol.iterator]();

for (let result = iterable.next(); !result.done; result = iterable.next()) {
  console.log(result.value);
}

console.log("symbol", Symbol.iterator);

class RangeIterator {
  private from: number;
  private to: number;

  constructor(from: number, to: number) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    const last = this.to;

    return {
      next() {
        return next <= last ? { value: next++ } : { done: true };
      },

      [Symbol.iterator]() {
        return this;
      }
    };
  }
}

const range = new RangeIterator(1, 4);

for (const item of range) {
  console.log("item", item);
}

const iterator = range[Symbol.iterator]();
console.log("iterator", iterator);
