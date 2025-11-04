const createCounter = () => {
  let count = 0;

  return (amount) => {
    count = count + amount;
    return count;
  };
};
const counter = createCounter();

// console.log(counter(3));
// console.log(counter(5));
// console.log(counter(2));

class Counter {
    constructor(count){
      this.count=count
    }
    add(amount){
      this.count=this.count+amount
    }
    print(){
      console.log(this.count);
    }
}
const counter1=new Counter(10)

counter1.add(21)
counter1.print();


//Example-2
class Car{
  constructor(name,year){
     this.carname=name;
     this.productionyear=year
  }
  print(){
    console.log(`${this.carname} was introduced in ${this.productionyear}`);
  }
}
const car1=new Car("Mercedes",1947)
car1.print()