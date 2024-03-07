// const numbers=[4,5,2,8];
// const doubled=[];
// for( const num of numbers){
//     const double=num*2;
//     doubled.push(double);
// }
// console.log(doubled)

const numbers=[4,5,2,8,10];
function doubleIt(num){
    console.log('num now',num);
    return num*2;
}

const result=numbers.map(doubleIt);
console.log(result);

const number=[10,20,30,40]

const avG=(nam)=>nam*2

const result1=number.map(avG)
console.log(result1);

var number3=[1,2,3,4]
var result3=number3.map((num)=>{
    return 2*num;
})
console.log(result3)
