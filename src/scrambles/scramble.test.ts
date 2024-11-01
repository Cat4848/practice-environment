test("if arrays are equal", async () => {
  async function delay(ms: number) {
    return "done";
  }
  const res = delay(1000);
  console.log("res", res);

  const promise = new Promise((resolve, reject) => {
    resolve("done");
    reject("not done");
  });

  console.log("promise", promise);
});
