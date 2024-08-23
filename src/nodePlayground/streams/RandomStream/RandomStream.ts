import { Readable } from "stream";
import { Chance } from "chance";

const chance = new Chance();

export default class RandomStream extends Readable {
  emittedBytes = 0;
  constructor() {
    super();
    this.emittedBytes = 0;
  }
  details() {
    console.log("print details");
  }

  hello() {
    console.log("print hello");
  }
}
