import GCD from "../GCD";

test.each([
  [20, 30, 10],
  [12, 6, 6],
  [7, 3, 1],
  [10, 15, 5]
])("if correct GCD is calculated", (a: number, b: number, expected: number) => {
  const gcd = new GCD();
  const gcdGeneral = gcd.getGCDGeneral(a, b);
  expect(gcdGeneral).toBe(expected);
});
