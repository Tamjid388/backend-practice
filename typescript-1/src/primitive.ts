{
  //Primitive Data Types in TypeScript

  let firstName: string = "John";
  let isAdmin: boolean = false;

  let bazarList: string[] = ["milk", "sugar", "salt"];

  let mixedarry: (string | number | boolean)[] = ["sgar", 22, true];

  //tuples

  let user: [string, number, boolean, number] = ["ra", 3, false, 2];

  let [a, b, c, d] = user;
}

{
  //Object type
  const user: {
    firstName: string;
    middleName: string;
    lastname: string;
  } = {
    firstName: "Tamjid",
    middleName: "Ahmed",
    lastname: "Razin",
  };
}
