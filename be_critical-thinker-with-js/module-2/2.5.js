// 🚗 Array of Car Items
const carItems = [
  { id: 1, name: "Tesla Model 3", price: 400, quantity: 5 },
  { id: 2, name: "Toyota Corolla", price: 600, quantity: 10 },
  { id: 3, name: "Honda Civic", price: 700, quantity: 8 },
  { id: 4, name: "BMW X5", price: 1000, quantity: 3 },
  { id: 5, name: "Ford Mustang", price: 800, quantity: 4 },
];

const subtotal = carItems.reduce((subtotal, product) => {
   
  return subtotal + product.price * product.quantity;
}, 0);
// console.log("total amount is",subtotal,"BDT");

// ⚽ Array of Football Players
const players = [
  { name: "Lionel Messi", score: 95, salary: 54 }, // $54M
  { name: "Cristiano Ronaldo", score: 93, salary: 50 }, // $50M
  { name: "Kylian Mbappé", score: 91, salary: 42 }, // $42M
  { name: "Erling Haaland", score: 90, salary: 35 }, // $35M
  { name: "Kevin De Bruyne", score: 188, salary: 32 }, // $32M
];
const bestScorer=players.reduce(
    (bestPlayer,player)=>{
        console.log(bestPlayer,player);
        if(bestPlayer.score>player.score){
            return bestPlayer
        }
        return player
    }
,players[0])
