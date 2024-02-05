// quantity price

const sumOFQuantity=(products)=>{
let sum=0;
    for(const product of products){
const price=product.price;
const quantity=product.quantity;
const result=price * quantity;
 sum=sum+result;

    }

return sum;


}
const products=[
    {name:'laptop', price:20000, quantity:3 },
    {name:'dekstop', price:40000, quantity:4 },
    {name:'pc', price:30000, quantity:1 },
    {name:'mac', price:22000, quantity:2 }
]
const output=sumOFQuantity(products)
console.log(output)