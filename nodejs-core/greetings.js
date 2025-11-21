const args=process.argv

const name=args[2] || "guest"  //process.argv[2] first actual argument

const time=new Date().getHours()
let greeting;
if(time<12){
    greeting = "Good Morning"
}else if(time < 18 ){
    greeting = "Good Afternoon"
}else{
    greeting = "Good Evening"
}
console.log(`${greeting} ${name}` );