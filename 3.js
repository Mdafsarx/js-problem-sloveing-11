// simple calculate or

function sum(x,y){
return x + y
}
function minus(x,y) {
    return x-y;
}
function mul(x , y){
    const result=x * y;
    return result;
}
function division(x,y){
const result=x / y;
return result;
}

function calculate(a,b,command){

    if(command==="+"){
        const ans=sum(a,b);
        return ans;
    }
    else if(command==='-'){
        return minus(a,b);
    }
    else if(command==='*'){
        return mul(a,b)
    }
    else if(command==='/'){
        const ans=division(a,b)
    }

return ` ${a} and ${b} number is not valid`
}
const output=calculate(2,3);
console.log(output)