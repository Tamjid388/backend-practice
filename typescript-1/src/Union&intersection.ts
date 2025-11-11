type UserRole='admin' | 'user'

function greetUser(role: UserRole) {
  if (role === 'admin') {
    console.log("Welcome, Admin!");
  } else if (role === 'user') {
    console.log("Hello, User!");
  }
}

greetUser('admin');
greetUser('user');


// InterSection &

type Employeee={
  name:string,
  id:string,
  phone:string
}
type Manager={
  designation:string,
  teamSize:number,
  phonea:string
}
type EmployeeemANAGER=Employeee & Manager

const user:EmployeeemANAGER={
  name:"tamjid",
  id:"33",
  phone:"e",
  designation:"sa",
  teamSize:32,
  phonea:"sa"
}