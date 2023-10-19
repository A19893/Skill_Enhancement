let fs = require("fs");

function ReadingFunc() {
  return function readingFileWithTime(file) {
    return new Promise((resolve, reject) => {
      var startTime = performance.now();
      console.log(startTime, "start");
      fs.readFile(file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          var endTime = performance.now();
          console.log(endTime, "end");
          console.log(
            `File: ${file}\nContent:\n${data}\nTime taken: ${
              endTime - startTime
            }ms\n`
          );
          resolve();
        }
      });
    });
  }
}

let files = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
  "file6.txt",
  "file7.txt",
];

const readFilesFunc = ReadingFunc();
console.log(readFilesFunc,"func")
async function readFiles() {
  for (let file of files) {
    try {
      // console.log(file,"particular file")
      await readFilesFunc(file);
    } catch (err) {
      console.error(`Error reading ${file}: ${err}`);
    }
  }
}

readFiles();
