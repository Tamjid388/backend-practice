type Generic = Array<string>;

const arr: Generic = ["as"];

type Gen<T> = Array<T>;

type User = {
  name: string;
  age: number;
};
const userList1: Gen<User> = [
  {
    name: "Mr. X",
    age: 33,
  },
  {
    name: "Mr. John",
    age: 20,
  },
];

interface IDeveloper<T> {
  name: string;
  sallary: number;
  device: {
    model: string;
    brand: string;
    releasedYear: string;
  };
  smartWatch: T;
}
const Developer: IDeveloper<{
  heartRate: string;
  stopWatch: boolean;
}> = {
  name: "tamjid",
  sallary: 100,
  device: {
    model: "Mac",
    brand: "brand",
    releasedYear: "2000",
  },
  smartWatch: {
    heartRate: "string",
    stopWatch: false,
  },
};
