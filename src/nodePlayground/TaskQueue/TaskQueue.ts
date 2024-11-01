// export default class TaskQueue {
//   private taskQueue: Function[];
//   private consumerQueue: Function[];

//   constructor(concurrency: number) {
//     this.taskQueue = [];
//     this.consumerQueue = [];

//     for (let i = 0; i < concurrency; i++) {
//       this.consumer();
//     }
//   }

//   async consumer() {
//     while (true) {
//       try {
//         const task = await this.getNextTask();
//         // @ts-ignore
//         await task();
//       } catch (e) {
//         console.error("error in this.consumer -> ", e);
//       }
//     }
//   }

//   async getNextTask() {
//     return new Promise((resolve) => {
//       if (this.taskQueue.length !== 0) {
//         return resolve(this.taskQueue.shift());
//       }
//       this.consumerQueue.push(resolve);
//     });
//   }

//   runTask(task: Promise<Function>){
//     return new Promise((resolve, reject) => {
//       const taskWrapper = () => {
//         const taskPromise = task();
//         taskPromise.then
//       }
//     })
//   }
// }

export default class TaskQueue {
  taskQueue: Function[];
  consumerQueue: Function[];

  constructor(){
    this.taskQueue = [];
    this.consumerQueue = [];
  }

  async resolvePushArray(){
    return new Promise((resolve, reject) => {
      this.consumerQueue.push(resolve)
    })
  }

}
