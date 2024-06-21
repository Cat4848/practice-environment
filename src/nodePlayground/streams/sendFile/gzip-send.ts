import { request } from "http";
import { createGzip } from "zlib";
import { createReadStream } from "fs";
import path from "path";

const file2GB = "2GB-file";
const dirName =
  "/Users/cata/Documents/education/Programming/Practice/JavaScript/practice-environment/src/nodePlayground/streams/sendFile";
const filePath = path.join(dirName, "/data", file2GB);

const httpRequestOptions = {
  hostname: "localhost",
  port: 4000,
  path: "/",
  method: "PUT",
  headers: {
    "Content-Type": "application/octet-stream",
    "Content-Encoding": "gzip",
    "X-Filename": path.basename(filePath)
  }
};

const req = request(httpRequestOptions, (res) => {
  console.log(`Server response: ${res.statusCode}`);
});

createReadStream(filePath)
  .pipe(createGzip())
  .pipe(req)
  .on("finish", () => {
    console.log("File sent successfully.");
  });
