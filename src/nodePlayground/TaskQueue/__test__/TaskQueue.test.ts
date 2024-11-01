import TaskQueue from "../TaskQueue";

test("push resolve into the consumerQueue array", async () => {
  const taskQueue = new TaskQueue();
  taskQueue.resolvePushArray();

  const resolveCallResult = await taskQueue.consumerQueue[0]();
  console.log("resolveCallResult", resolveCallResult);
});
