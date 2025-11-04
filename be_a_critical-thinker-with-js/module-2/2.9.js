
//Denormalizing Data 

const users = [
  { id: 101, name: "alice" },
  { id: 102, name: "tony" },
  { id: 103, name: "charlie" },
];
const posts=[
    {
        id:1,
        userId:101,
        title:"My first Post"
    },
    {
        id:2,
        userId:102,
        title:"React Component Lifecycle"
    },
    {
        id:3,
        userId:101,
        title:"Nextjs Version 16 features"
    },
    {
        id:4,
        userId:102,
        title:"GSep Complete Tutorial"
    },
]
const postByUserId=posts.reduce((table,post)=>{
const {userId}=post;
if(!table[userId]){
    table[userId]=[]
}
table[userId].push(post)
return table

},
{})
console.log(postByUserId);

const userWithPosts=users.map((user)=>{
    return{
        ...user,
        posts:postByUserId[user.id]||[]
    }
})
console.log(userWithPosts);