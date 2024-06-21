import fsPromises from "node:fs/promises";

export default class ReaderFiles {
  async readFile(filePath: string) {
    try {
      const data = await fsPromises.readFile(filePath, { encoding: "utf-8" });
      return data;
    } catch (e) {
      return `Unable to read data from ${filePath}`;
    }
  }

  async writeFile(filePath: string, content: string) {
    try {
      await fsPromises.writeFile(filePath, content);
      return "File write successful";
    } catch (e) {
      return `Error writing file ${filePath}`;
    }
  }
}
