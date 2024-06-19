import ReaderFiles from "./ReaderFiles";
import path from "path";

test("if reads file correctly", async () => {
  const fileReader = new ReaderFiles();
  const filePath = path.resolve(__dirname, "./config.ts");
  const fileContent = await fileReader.readFile(filePath);

  expect(fileContent).toMatch(/ts-jest/gi);
});

test
