// experiment-7
const ar1=["jahnavi","namitha","meghana"]
for(let i=0;i<=3;i++){
    console.log(ar1[i])
 }
console.log('........')
ar1.push("janu")
for(let i=0;i<=3;i++){
    console.log(ar1[i])
 }
 console.log('........')
 ar1.unshift("cherry")
 for(let i=0;i<=4;i++){
    console.log(ar1[i])
 }
 console.log('........')
 const ar2=["naveena","annie","keerthy"]
 ar1.concat(ar2)
 ar1.forEach(i => {
    console.log(i)
 });