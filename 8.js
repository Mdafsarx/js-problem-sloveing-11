// obj 

const student={
    name:"afsar",
    roll:1,
    isStudent:true,
}

function objects(object){

    if(typeof object!=="object" || Array.isArray(object)){
        return 'please enter a valid number'
    }

    const result=object.isStudent;
    return result;

}
const arr=[];
const string="a";
const output=objects([5,6]);
console.log(output);