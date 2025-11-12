type User = {
  name: string;
  age: number;
};

interface Iuser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};
type UserWithROle = Iuser & Role;

const user1: UserWithROle = {
  name: "a",
  age: 23,
  role: "admin",
};
interface IUSERROLE extends Iuser {
  role: "admin" | "user";
}
// interface in Array

interface Ifriends {
  [index: number]: string;
}

const friends: Ifriends = ["John", "Carlo", "Amyy"];

//function
//Example 1
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => {
  return num1 + num2;
};

//Example 2
interface Iadd {
  (num1: number, num2: number): number;   // <-- This is called a call signature
}

const add2: Iadd = (num1, num2) => {
  return num1 + num2;
};
