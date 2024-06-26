process.stdin
  .on("readable", () => {
    let chunk;
    console.log("New data available");
    chunk = process.stdin.read();
    while (chunk !== null) {
      console.log(`Chunk read: ${chunk.toString()}`);
    }
  })
  .on("end", () => {
    console.log("End of stream");
  });
