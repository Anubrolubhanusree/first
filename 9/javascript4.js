// Experiment-9 
const array=[];
let b=document.getElementById("btn1");
b.addEventListener("click",function f(e){
   console.log(e.target.textContent)
   array.push(e.target.textContent)
   });
let b2=document.getElementById("btn2");
b2.addEventListener("click",function f(e){
   console.log(e.target.textContent)
   array.push(e.target.textContent)
   });
let b3=document.getElementById("btn+");
b3.addEventListener("click",function addition(){
   console.log(e.target.textContent)
});