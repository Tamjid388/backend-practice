//Grouping And Aggregating Data

const surveyData = [
  "Great experience!",
  "Good, but can improve.",
  "Average service.",
  "Loved it!",
  "Not satisfied.",
  "Excellent support!",
  "Could be better.",
  "Very helpful staff.",
  "Will visit again.",
  "Needs improvement.",
];
const surveyResponses = [
  "A",
  "B",
  "C",
  "A",
  "D",
  "B",
  "E",
  "C",
  "A",
  "D",
  "B",
  "E",
  "C",
  "A",
  "B",
  "D",
  "E",
  "C",
  "A",
  "B",
];
const count=surveyResponses.reduce((table,response)=>{
   if(table[response]){
table[response]=table[response]+1
   }else{
    table[response]=1
   }
   return table
},{})

console.log(count);
