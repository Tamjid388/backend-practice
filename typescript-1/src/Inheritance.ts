

class Parent{
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  getsleep() {
    console.log("lorem ipsum");
  }
}


class Student extends Parent{

}

class Teacher extends Parent{

  designation: string;
  constructor(name:string,age:number,designation: string) {
   super(name,age)
    this.designation = designation;
  }

  takeClass(){
    console.log(`${this.name} is a ${this.designation}`);
  }
}

const nsew = new Student("John doe", 32);
const teacher1 = new Teacher("mr teacher", 34, "lecturer");
teacher1.takeClass()
