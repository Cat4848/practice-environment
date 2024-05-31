import fs from "node:fs";

export default class ReaderFiles {
  readFile(filePath: string) {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) {
        return;
      } else {
        return data;
      }
    });
  }
}
