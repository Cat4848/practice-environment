import { Readable } from "stream";
import { Chance } from "chance";

const chance = new Chance();

export default class RandomStream extends Readable{
  emittedBytes = 0;
  constructor(options){
    super(options);
    this.emittedBytes = 0;
  }
}
