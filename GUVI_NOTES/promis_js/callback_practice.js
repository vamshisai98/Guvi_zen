function sum(a,b){
    return a+b
}
function mul(a,b){
    return a*b
}
function mod(a,b){
    return a%b
}
function div(a,b){
    return a/b
}
function dif(a,b){
    return a-b
}
function calc(a,b,cb){
return cb(a,b)
}
console.log(calc(4,5,sum))
console.log(calc(4,5,mul))
console.log(calc(3,4,mod))
console.log(calc(3,4,div))
console.log(calc(2,2,dif))

