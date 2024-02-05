// discount 
// 10 ---> no
// upto 10---> 8
// 20 to infinity --> 5

const discount=(number)=>{

    const pen=10;
    const pen10To20=8;
    const pen20ToreRest=5;

    if(number<=10){
        const total=pen * number;
        return total;
    }
    else if(number<=20){
        return pen10To20 * number;
    }
    else if(number>20){
        return pen20ToreRest * number;
    }
    return ` enter a valid number `
    


}
const buy=15;
const ans=discount(buy)
console.log(ans)