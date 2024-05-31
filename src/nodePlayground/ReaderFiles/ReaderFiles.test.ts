import ReaderFiles from "./ReaderFiles";

test("if reads file correctly", async () => {
  const fileReader = new ReaderFiles();
  const fileContent = fileReader.readFile(
    "src/nodePlayground/ReaderFiles/file.txt"
  );
});
