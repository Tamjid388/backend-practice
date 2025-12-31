import { prisma } from "./lib/prisma";

async function run (){
//     const createUser = await prisma.user.create({
//   data: {
//     email: 'elsa@prisma.io',
//     name:"tamjid ahmed"
    
//   },
// })
//     console.log("created user", createUser);
   
// const createPost=await prisma.post.create({
//     data:{
//         title:"Exploring Prisma Orm",
//         content:"Its known as object relational modeling",
//         authorId:1
//     }
// })
// const createProfile=await prisma.profile.create({
//     data:{
//         userId:1
//     }
// })

// const users=await prisma.user.findMany({
//     include:{
//         posts:true,
//         profile:true
//     }
// })
// console.log(users);
// console.dir(users,{depth:Infinity});
const updateUser = await prisma.user.update({
  where: {
    email: 'elsa@prisma.io',
  },
  data: {
   email: 'tamjidahmed@gmail.com',
  },
})
}
run()