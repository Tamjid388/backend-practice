const products = [
  {
    id: 1,
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 850,
    rating: 4.7,
    stock: 35
  },
  {
    id: 2,
    productName: "Mechanical Keyboard",
    category: "Electronics",
    price: 2300,
    rating: 4.2,
    stock: 18
  },
  {
    id: 3,
    productName: "Running Shoes",
    category: "Footwear",
    price: 3200,
    rating: 4.5,
    stock: 22
  },
  {
    id: 4,
    productName: "Water Bottle",
    category: "Accessories",
    price: 250,
    rating: 4.1,
    stock: 60
  },
  {
    id: 5,
    productName: "Smart Watch",
    category: "Electronics",
    price: 5800,
    rating: 4.8,
    stock: 10
  },
  {
    id: 6,
    productName: "Cotton T-Shirt",
    category: "Clothing",
    price: 750,
    rating: 4.2,
    stock: 40
  },
  {
    id: 7,
    productName: "Backpack",
    category: "Accessories",
    price: 1450,
    rating: 4.4,
    stock: 25
  },
    {
    id: 8,
    productName: "Heater",
    category: "Electronics",
    price: 1450,
    rating: 5,
    stock: 25
  }
];
const filteredProducts=products.filter((product)=>product.category==="Electronics")


const topProducts=
filteredProducts
.sort((a,b)=>a.rating-b.rating)
.slice(0,3)
.map((item)=>{
    return {name:item.productName}
})
const fruits=["Cherry","Banana","apple","date"]
fruits.sort((a,b)=>a.localeCompare(b))
const arr = [1, [2, [3]], [4, 5]];
const result=arr.flat(5)
