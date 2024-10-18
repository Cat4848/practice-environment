test("if arrays are equal", () => {
  function* fibonacciSequence() {
    let x = 0,
      y = 1;
    for (;;) {
      yield y;
      [x, y] = [y, x + y];
    }
  }

  // const fib = fibonacciSequence();

  function fibonacci(n: number) {
    for (const f of fibonacciSequence()) {
      console.log("fib number", f, n);
      if (n-- <= 0) return f;
    }
  }
  console.log("20th number", fibonacci(20));
});
