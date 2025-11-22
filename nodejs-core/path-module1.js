const path=require("path")

console.log("current file info:\n");
console.log("filename ",__filename);
console.log("Directory:", __dirname);
console.log("\n"+"-".repeat(50)+"\n");
const filepath="./tamjid/nextlevel.pdf"
console.log("Analyzing file path",filepath,"\n");
console.log("Directory:",path.dirname(filepath));
console.log("Basename",path.basename(filepath));

console.log("FIle Extension",path.extname(filepath));
console.log("FIle Name",path.basename(filepath,path.extname(filepath)));
console.log("parsed path obect",path.parse(filepath));