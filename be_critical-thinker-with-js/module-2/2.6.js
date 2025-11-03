const postArray = [
  { id: 1, title: "Intro to SQL", author: "Tamjid Ahmed" },
  { id: 2, title: "JavaScript Basics", author: "John Doe" },
  { id: 3, title: "React for Beginners", author: "Jane Smith" },
  { id: 4, title: "Understanding Node.js", author: "Alice Johnson" },
  { id: 5, title: "CSS Grid & Flexbox", author: "Bob Brown" },
];
const lookUpTable=postArray.reduce((table,post)=>
    {
        table[post.id]=post
        return table
    }

,{})

console.log(lookUpTable[1]);