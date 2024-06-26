import { createServer } from "http";
import { createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { basename, join } from "path";
import { IncomingHttpHeaders } from "http";

interface FilenameHeaders extends IncomingHttpHeaders {
  "x-filename": string;
}

const server = createServer((req, res) => {
  const headers = req.headers as FilenameHeaders;
  const dirName =
    "/Users/cata/Documents/education/Programming/Practice/JavaScript/practice-environment/src/nodePlayground/streams/sendFile";
  const filename = basename(headers["x-filename"]);
  const destinationFile = join(dirName, "/received-files", filename);

  req
    .pipe(createGunzip())
    .pipe(createWriteStream(destinationFile))
    .on("finish", () => {
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end("All Good!");
    });
});

server.listen(4000);
