type Product={
    id:number,
    name:string,
    price:string,
    stock:string,
    color?:string
}

type ProductSummary=Pick<Product,"id" |"name" | "price">


type ProductWithoutStock=Omit<Product,"stock">

type OptionalProduct=Partial<Product>


const product1={
    id:221,
    name:"Macbook",
    price:"1000",
    
}