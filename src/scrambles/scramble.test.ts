import { deepEqual } from "assert";
import { put } from "redux-saga/effects";

test("if arrays are equal", async () => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const putRes = put({ type: "put-test-action" });
  console.log("putRes", putRes);

  function* helloHere() {
    yield "continue";
    // yield delay(2000);
  }

  const res = helloHere();
  const first = res.next();

  //  expect(putRes)
  deepEqual(first.value, putRes);
  console.log("first", first);
});
