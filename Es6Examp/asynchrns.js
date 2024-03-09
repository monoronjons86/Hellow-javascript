
// console.log('Line 1 code')
// setTimeout(function(){
//     console.log('Line 2 code')
// },2000);
// console.log('line 3 code')

// console.log('task1');
// console.log('task2');
// console.log('task3');
// console.log('task4');
// console.log('task5')

const taskOne=()=>{
    console.log('task1')
}
const dataLoading=()=>{
    console.log("Task2. Data Loading ")
}
const taskTwo=()=>{
    setTimeout(dataLoading,2000)
}
const taskThree=()=>{
    console.log('task3')
}
const taskFour=()=>{
    console.log('task4')
}
const taskFive=()=>{
    console.log('task5');
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();