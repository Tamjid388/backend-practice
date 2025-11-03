const sales = [
  {
    category: "Electronics",
    item: "Laptop",
    price: 25,
    quantity: 1,
  },
  {
    category: "Books",
    item: "Js Basics",
    price: 30,
    quantity: 2,
  },
  {
    category: "Electronics",
    item: "Mouse",
    price: 25,
    quantity: 2,
  },
  {
    category: "Home",
    item: "Chair",
    price: 43,
    quantity: 6,
  },
];
const totalSalesByCategory = sales.reduce((table, item) => {
  const { category, price, quantity } = item;
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }
  table[category].totalRevenue = `${price * quantity} $`;
  table[category].itemCount += quantity;
  return table;
}, {});

console.log(totalSalesByCategory);

//Output:

// {
//   Electronics: { totalRevenue: '50 $', itemCount: 3 },
//   Books: { totalRevenue: '60 $', itemCount: 2 },
//   Home: { totalRevenue: '258 $', itemCount: 6 }
// }