//type guard or type narrowing

const add = (num1: number, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

const res = add(2, 3);
const res1 = add(2, "2");
console.log(res, res1);

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};
const getInfo = (user: NormalUser | AdminUser) => {
  console.log(`this is a ${user.name}`);
};
getInfo({ name: "tamjid" });
// Type guard using instance of


class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class Student extends Person{
    constructor(name:string){
        super(name)
    }

    study(numhours:string){
        console.log(`${this.name} studing ${numhours} per day`)
    }
}
class Teacher extends Person{
    constructor(name:string){
        super(name)

    }
    takeclass(numhours:string){
 console.log(`${this.name} teaching ${numhours} per day`)
    }
}

const isStudent=(user:Person)=>{
    return user instanceof Student
}
const isTeacher=(user:Person)=>{
    return user instanceof Teacher
}


const getUserInfo=(user:Person)=>{
if(isStudent(user)){
    user.study('3 hours')
}
if(isTeacher(user)){
    user.takeclass('3 hours')
}
}
// const getUserInfo=(user:Person)=>{
// if(user instanceof Student){
//     user.study('3 hours')
// }
// if(user instanceof Student){
//     user.study('3 hours')
// }
// }

const student1=new Person('Mr Student')
const teacher1=new Teacher('Mr teacher')
getUserInfo(student1)


