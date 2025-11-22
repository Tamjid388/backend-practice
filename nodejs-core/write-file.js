const fs=require("fs")
const content1="This is my content\n nodejs is a runtime environment"
try {
    fs.writeFileSync("./output/test-sync.txt",content1)
    console.log("File Written");
} catch (error) {
    console.log(error.message);
}
