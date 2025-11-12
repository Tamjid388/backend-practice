//Generics In TypeScript

// const friends: string[] = ["John", "Carlo", "Amy", "Sophia", "Liam"];
const friends: Array<string> = ["John", "Carlo", "Amy", "Sophia", "Liam"];

// const rollNumbers: number[] = [101, 102, 103, 104, 105];

const rollNumbers: Array<number> = [101, 102, 103, 104, 105];
const isEligible: Array<boolean> = [true, false, true, true, false];

type GenericArray = Array<string>;
const friends2: GenericArray = ["John", "Carlo", "Liam"];

type GenericDynamic<T> = Array<T>;
const rollNumber2: GenericDynamic<number> = [101, 102, 103, 104, 105];
const flags: GenericDynamic<boolean> = [true, false, true];

//Generics In Tupples

type Coordinates1=[number,number]

const coordinates1:Coordinates1=[2,4]


// or

type Coordinates2<x,y>=[x,y]

const coordinates2:Coordinates2<number,number>=[2,4]
const coordinates3:Coordinates2<string,string>=["string","string"]


//Generics In Object


const userList1=[
    {
        name:"Mr. X",
        age:33
    },
    {
        name:"Mr. John",
        age:20 
    },
]
