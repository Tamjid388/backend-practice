const { error } = require("console");
const fs = require("fs");

console.log("Start Reading...");

const data = fs.readFile("./data/diary.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("File content");
    console.log(data);
  }
});

console.log("No blocking");
