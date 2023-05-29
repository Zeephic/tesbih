const count=document.querySelector(".count");
const start=document.querySelector(".start");

let counter=0;

start.addEventListener("click", ()=>{
 counter++

 count.innerHTML=counter
})


function reset(){
    counter=0;
    count.innerHTML=counter;
}