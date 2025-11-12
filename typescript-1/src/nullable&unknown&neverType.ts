
const getUser = (input: unknown) => {
  if (typeof input === "string") {
    console.log(`from db ${input.toUpperCase()}`); 
  } else if (typeof input === "number") {
    console.log(`from db ${input}`);
  } else {
    console.log(`No input`);
  }
};

getUser(null);
getUser("nu");
getUser(23);