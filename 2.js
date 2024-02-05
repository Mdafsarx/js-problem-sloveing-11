// find the max price obj in array

const mbl=[
    {name:'samsung',price:10000},
    {name:'iphone',price:40000},
    {name:'redmi',price:15000},
    {name:'oppo',price:48900},
    {name:'pixel',price:56000}
]

const maxObj=(mbl)=>{

let max=mbl[0];

    mbl.forEach(mobil => {
if(mobil.price>max.price){

    max=mobil;

}

    });

return max;

}
const output=maxObj(mbl);
console.log(output)