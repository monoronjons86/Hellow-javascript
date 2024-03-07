// data access
// const data=[{id:1,name:'abul',address:'kocu khat'}]
// console.log(data[0].address);

const products={
    count:500,
    data:[
        {id:1,name:'lenovo laptop',price:65000},
        {id:2,name:'lenovo laptop',price:165000}
    ]

}
console.log(products.data[0].name);

const user={
    id:5001,
    name:'soriful Raz',
    address:{
            strect:{
                first:'54/1 uttor side',
                second:'poribag ar goli',
                third:'nodori'
            }      
    }
}
console.log(user.address.strect.first);

const user2={
    id:5002,
    name:'pori bibir majar',
    address:{
        city:'chittagong',
        country:'bangladesh'
    }
}
console.log(user2.address.strect?.first);