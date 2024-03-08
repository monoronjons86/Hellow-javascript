// function greet(name,callback){
//     console.log('hi'+''+name)
//     callback()
// }
// function callMe(){
//     console.log('I am callback function')
// }
// greet('peter',callMe)

function sample(a,b){
    var c=a+b;
    var d=a-b;
    var restult=sum(c,d);
    return restult;
}

function sum(a,b){
    return a+b;
}
var total=sample(5,8)
console.log(total);


function display(some){
    console.log(some);
}

function calculator(nam1,nam2, callback){
    let sum=nam1+nam2;
    callback(sum);
}
calculator(10,5,display)