const user={id:1,name:'Gorib ar amir',job:'actor'}
console.log(user);

const stringfied=JSON.stringify(user)
console.log(stringfied);

const shop={
    owner:'Alia',
    address:{
        street:'kochukhet vooter er goli',
        city:'ranbir',
        country:'Bd',
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
}
console.log(shop);
const shopjon=JSON.stringify(shop);
console.log(shopjon);

const shopObj=JSON.parse(shopjon);
console.log(shopObj);