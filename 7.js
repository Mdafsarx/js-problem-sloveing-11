// dif type of discount function

const discount=(num)=>{
    const pen=10;
    const pen100To200=7;
    const abovePen=5;

    if(num<=100){
        return pen * num;
    }
    else if(num<=200){
        const first100Price=pen * 100;
        const moreThen100=num-100;
        const moreThen100Price=pen100To200 * moreThen100
        const total=moreThen100Price + first100Price;
        return total;
    }

    else{
        const first100Price=pen * 100;
        const second200price=pen100To200 * 100;
        const aboveNumber=num - 200;
        const abovePrice=aboveNumber * 5;
        const total=first100Price + second200price +abovePrice;
        return total;
    }


}
const output=discount(300);
console.log(output)