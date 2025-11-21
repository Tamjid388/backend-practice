class Counter {
 static count: number = 0;
  increament() {
    return (Counter.count += 1);
  }
  decreament() {
    return (Counter.count -= 1);
  }
}
const instance1 = new Counter();
console.log(instance1.increament());
console.log(instance1.increament());
console.log(instance1.increament());
console.log(instance1.increament());

const instance2 = new Counter();
console.log(instance2.decreament());
