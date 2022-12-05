function add(x,y){
    return x+y
}
console.log("addition:"+add(2,5));

function intosec(min){
    let sec=(min*60)
    return sec
}
console.log("conversion into sec :"+intosec(1))

function inc(num){
    return num++
}
console.log("increment:"+inc(2))

function area(b,h){
    return 1/2*b*h
}
console.log("area of triangle:"+area(2,5))

function indays(yrs){
    let days=0
    let lp=Math.floor(yrs/4)
    days=yrs*365+lp
    return days
}
console.log("years into days:"+indays(4))