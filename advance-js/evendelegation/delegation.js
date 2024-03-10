const list=document.getElementById("list")

list.addEventListener("click",(e)=>{
    // console.dir(e.target)
    console.log(e.target)
    if(e.target.matches("li")){
        if(e.target.innerText === 'Javascipt'){
            e.target.style.backgroundColor='yellow';
        }
        else{
            e.target.style.backgroundColor="green";
        }
        
    }
    
})
function addElement(){
    const newElement=document.createElement('li');
    newElement.textContent='new me';
    list.appendChild(newElement)
}