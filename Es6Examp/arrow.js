function add(a,b){
    const result=a+b;
    return result;
}
const sum=add(5,90)
console.log(sum);

//function expression
const add2=function(){
    return a+b;
}

//arrow function
const add3=(a,b)=>a+b;

const add1=add3(20,30);
console.log(add1);

const getAge=(person)=>person.age ;
const student={name:'ananta',age:45}
const age=getAge(student);
console.log(age);
