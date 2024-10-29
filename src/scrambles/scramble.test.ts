test("if arrays are equal", () => {
  function* fibonacciSequence() {
    let x = 0,
      y = 1;
    for (;;) {
      yield y;
      [x, y] = [y, x + y];
    }
  }

  const fib = fibonacciSequence();

  function fibonacci(n: number) {
    for (const f of fibonacciSequence()) {
      if (n-- <= 0) return f;
    }
  }
});
