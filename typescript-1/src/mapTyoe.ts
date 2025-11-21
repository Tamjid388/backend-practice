type Vehicle={
    bike:string,
    car:string,
    ship:string
}
type AreaOfNum={
    height:number,
    width:number
}
type height=AreaOfNum["height"]


// type AreaOfString={
//     height:string,
//     width:string
// }
type AreaOfString1={
    [key in keyof AreaOfNum]:string
}
type Area<T>={
    [key in keyof T]:T[key]
}


const area:Area<{height:string,width:string}>={
    height:"43",
    width:"43"
}