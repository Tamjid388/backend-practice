const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("created a temp file");
if (fs.existsSync("./output/temp.txt")) {
  console.log("File Exists");
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}


fs.writeFile("./output/temp2.txt","Another temp file",(error)=>{
    if(error){
        console.log("error");
    }
    console.log('temp 2 created');
})
fs.unlink("./output/temp2.txt",(error)=>{
    if(error){
        console.error("err",error.message

        )
    }else{
        console.log("temp2 deleted");
    }
})