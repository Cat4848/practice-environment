import ReaderFiles from "./ReaderFiles";
import path from "path";

test("if reads file correctly", async () => {
  const fileReader = new ReaderFiles();
  const filePath = path.resolve(__dirname, "./config.ts");
  const fileContent = await fileReader.readFile(filePath);

  expect(fileContent).toMatch(/ts-jest/gi);
});

test("if file writes successfully", async () => {
  const fileReader = new ReaderFiles();
  const filePath = path.resolve(__dirname, "./customers.csv");
  const fileContents = `
    name,mobile,color,
    Rich,04562,red,
    Mark,02145,blue,
    Joe,02457,green
  `;

  const fileWriteConfirmation = await fileReader.writeFile(
    filePath,
    fileContents
  );
  expect(fileWriteConfirmation).toContain("successful");
});

test("how the data is read using streams", async () => {
  const fileReader = new ReaderFiles();
  const customersFilePath = path.resolve(__dirname, "./customers.csv");
  const readFileStream = await fileReader.createReadStream(customersFilePath);
  readFileStream.on("error", (error) => {

    readFileStream.on("data", (chuck) => {
    });
  });
});
