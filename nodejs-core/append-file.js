const fs = require("fs");
fs.writeFileSync("./output/app.log", "App started\n");

console.log("FIle Created");

const logEntry = `${new Date().toISOString()} user logged in\n`;

fs.appendFileSync("./output/app.log", logEntry);

const logEntry2 = `${new Date().toISOString()} user logged in\n`;
fs.appendFileSync("./output/app.log", logEntry2);
console.log("task complete");
