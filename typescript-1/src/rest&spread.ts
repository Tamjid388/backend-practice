//Rest & Spread Operator

const friends=["rahim","karim"]

const schoolfreinds=["rony","rifat"]
const collegefreinds=["z","c"]
const user={
name:"tamjid",
phone:"0132222",

}
const other={
  hobby:"Outing"
}

const userInfo={...user,...other}



//rest operator

const sendInvite=(...friends:string[])=>{
friends.forEach((friend:string)=>console.log(`Send invitation to ${friend}`))
}

sendInvite('Tamjid','Rony','Sabbir')
