
const os=require("os")
console.log("System Info \n");
console.log("--".repeat(50));
console.log("\n Platform Details");

console.log("Platform ", os.platform());
console.log("Architecture",os.arch());
console.log("Os TYpe",os.type());
console.log("Os Release",os.release());
console.log("Hostname",os.hostname());
console.log("Cpu Info",);
const cpus=os.cpus()
console.log("Cpu Speed",cpus[0].speed);
console.log("Cpu Model :",cpus[0].model);
console.log("Number Of cors:",cpus.length);

console.log("Total Memory (MB):", os.totalmem() / 1024 / 1024);
console.log("Free Memory (MB):", os.freemem() / 1024 / 1024);

const seconds = os.uptime();
const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds % 3600) / 60);
const secs = Math.floor(seconds % 60);

console.log(`Uptime: ${hours}h ${minutes}m ${secs}s`);