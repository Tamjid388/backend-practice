const addstudent = <T extends { age: number }>(info: T) => {
  return {
    name: "tamjid",
    ...info,
  };
};

let res1 = addstudent({
  age: 32,
  isMarried: false,
});
let res11 = addstudent({
  age: 21,
  isMarried: false,
});
console.log(res11);

//  -> keyof constraint with generics
type TVehicle1 = {
  car: string;
  bike: string;
  cng: string;
};
type MyVehicle2 = "bike" | "car" | "cng";

type MyVehicla2 = keyof TVehicle1;
const demo: MyVehicle2 = "car";

const user = {
  id: 222,
  name: "John",
  address: {
    city: "ctg",
  },
};


type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const getPorperty = (obj: User, key: keyof User) => {
  return obj[key];
};

const res = getPorperty(user, "name");
console.log(res);
