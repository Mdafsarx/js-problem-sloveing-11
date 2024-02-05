const shop=(laptop,mbl,tablet)=>{

if(typeof laptop !=="number" || typeof mbl !=='number' || typeof tablet !=='number'){
    return `enter all the input number`
}

    const laptopPrice=30000;
    const mblPrice=10000;
    const tabPrice=5000;

    const totalLaptop=laptopPrice * laptop;
    const totalMbl=mblPrice * mbl;
    const totalTab=tabPrice * tablet;

    const total=totalLaptop + totalMbl +totalTab;
    return total;



}
const output=shop()
console.log(output)