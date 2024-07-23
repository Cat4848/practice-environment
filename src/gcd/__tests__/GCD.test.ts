import GCD from "../GCD";

const tests = [
  [20, 30, 10],
  [12, 6, 6],
  [7, 3, 1],
  [10, 15, 5],
  [180, 150, 30],
  [198, 132, 66],
  [200, 140, 20]
];

test.each(tests)(
  "if correct GCD is calculated using the general method",
  (a: number, b: number, expected: number) => {
    const gcd = new GCD();
    const gcdGeneral = gcd.getGCDGeneral(a, b);
    expect(gcdGeneral).toBe(expected);
  }
);

test.each(tests)(
  "if correct GCD in calculated using the subtraction method",
  (a: number, b: number, expected: number) => {
    const gcd = new GCD();
    const gcdSubtraction = gcd.getGCDSubtraction(a, b);
    expect(gcdSubtraction).toBe(expected);
  }
);

test.each(tests)(
  "if correct GCD in calculated using the modulo method",
  (a: number, b: number, expected: number) => {
    const gcd = new GCD();
    const gcdSubtraction = gcd.getGCDModulo(a, b);
    expect(gcdSubtraction).toBe(expected);
  }
);
