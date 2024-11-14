const a = 4;
const b = 5;
const add = (num1: number, num2: number) => num1 + num2;

console.log("here 1");
console.info("here 2");
console.warn("here 3");
function addition(num1: number, num2: number) {
  const result = num1 + num2;
  return result;
}

add(a, b);
addition(a, b);
