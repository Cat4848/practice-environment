import fs from "node:fs/promises";

export default class ReaderFiles {
  async readFile(filePath: string) {
    try {
      const data = await fs.readFile(filePath, { encoding: "utf-8" });
      return data;
    } catch (e) {
      return `Unable to read data from ${filePath}`;
    }
  }
}
