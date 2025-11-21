const fs = require("fs");

console.log("Start Reading...");

try {
  const data = fs.readFileSync("./data/diary.txt", "utf8");
  console.log(data);
  console.log("file content");
} catch (error) {
  console.error(error.message);
}

console.log("finished");