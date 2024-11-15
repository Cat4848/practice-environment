import express from "express";

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

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen("4000", () => {
  console.log("server listening on port 4000");
});
