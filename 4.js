// in obj sum the all prize

const mbl=[
{name:"car", price:500},
{name:"bus", price:600},
{name:"track", price:400},
{name:"plane", price:900},
]

function sum(mbl){

    let sum=0;
mbl.forEach(mobile => {
const price=mobile.price;
sum=sum+price;    
});
return ` sum of all the mbl Objects ${sum}`

}
const ans=sum(mbl)
console.log(ans)
