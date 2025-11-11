function add(num1: number, num2: number) {
  return num1 + num2;
}

const res = add(3, 2);
console.log(res);

const user = {
  name: "tamjid",
  balance: 10,
  addBalance(value: number):number {
   const total= this.balance+value
   return total
  },
};

let result=user.addBalance(400)

const arr:number[]=[1,2,4,5];
const sqrArray=arr.map((elem:number):number=>elem*10)

