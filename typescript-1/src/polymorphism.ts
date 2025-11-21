// polymorphism.ts

class Person {
  getSleep() {
    console.log("A  Person work 8 hours");
  }
}

class Student extends Person {
  getSleep() {
    console.log("A  Student Study 6 hours");
  }
}
class Developer extends Person {
  getSleep() {
    console.log("A  Developer Work 6 hours");
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const student1 = new Student();
const developer1 = new Developer();
// getSleepingHours(person1)

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  //area of circle is pi*r*r
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  //area of Rectangle is Height*Number
  getArea(): number {
    return this.height * this.width;
  }
}
const getArea=(param:Shape)=>{
console.log(param.getArea());
}

const shape=new Shape()
const circle=new Circle(23)
const rectangle=new Rectangle(20,3)

getArea(shape)
getArea(circle)
getArea(rectangle)