

//anonymous
var odd = function(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let newarr = arr.filter((x)=>{return x%2!==0})
    return newarr

}
console.log(odd())

//IIFE 
(function(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let newarr = arr.filter((x)=>{return x%2!==0})
    return newarr
})()


//anonymous
var caps = function(){
    let arr = ["hi","my","name","IS","VAMSHI"]
    let newarr= arr.map((x)=>x.toUpperCase())
    return newarr
}
console.log(caps())
//IIFE
(function(){
    let arr = ["hi","my","name","IS","VAMSHI"]
    let newarr= arr.map((x)=>x.toUpperCase())
    return newarr
})();


//annonymous
var sum = function(){
    let arr= [1,2,3,4,5,6,8,9,0,12,32]
    let newarr = arr.reduce(function(a,b){
        return a+b
    })
    return newarr
}
sum()

//IIFE
(function(){
    let arr= [1,2,3,4,5,6,8,9,0,12,32]
    let newarr = arr.reduce(function(a,b){
        return a+b
    })
    return newarr
})()


//annonymous

var prime = function(){
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]
     let newarr=arr.filter((x)=>{
        for(let i=2;i<=Math.sqrt(x);i++){
           
          
            if(x%i==0){
                return false
            }
        }
        
     return true
     
})
console.log(newarr)
}
prime()

//IIFE
(function(){
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]
    let newarr=arr.filter((x)=>{
       for(let i=2;i<=Math.sqrt(x);i++){
          
         
           if(x%i==0){
               return false
           }
       }
       
    return true
    
})
console.log(newarr)
})()


//annonymous
var palindrome = function(){


let arr = ['hi',121,100,'did',20,3003]

let arr1 = arr.filter(ele=>ele==ele.toString().split('').reverse().join(''))
console.log(arr1)
}
palindrome()
//IIFE
(function(){
    let arr = ['hi',121,100,'did',20,3003]

let arr1 = arr.filter(ele=>ele==ele.toString().split('').reverse().join(''))
console.log(arr1)
})()




//annonymous
var dup = function(){
var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var narr = []
for(var i=0;i<names.length;i++){
    if(narr.indexOf(names[i])==-1){
        narr.push(names[i])
    }
 
}
return narr
}
dup()

//IIFE
(function(){
    var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var narr = []
for(var i=0;i<names.length;i++){
    if(narr.indexOf(names[i])==-1){
        narr.push(names[i])
    }
 
}
return narr

})()

//anonymous
var median = function(){
    var ar=[1,2,4,6,7,8,9]; 
    var ar2=[1,2,5,76,0,9,6];
    var n = Math.ceil((ar.length - 1)/2);
    var m = Math.ceil((ar2.length -1)/2)
    
    var avg = (ar[n] + ar2[m])/2;
    console.log(avg)
}
median()
//IIFE

(function(){
    var ar=[1,2,4,6,7,8,9]; 
    var ar2=[1,2,5,76,0,9,6];
    var n = Math.ceil((ar.length - 1)/2);
    var m = Math.ceil((ar2.length -1)/2)
    
    var avg = (ar[n] + ar2[m])/2;
    console.log(avg)
})()


//annonymous
var rotate = function(){
    var arr = [1,2,4,6,7,89,0,9]
    var newarr=[]
    var k =3
    for(i=0;i<k;i++){
        newarr.push(arr[i])
    }
    // console.log(newarr)
    var rarr = arr.splice(0,k)
    // console.log(arr)
    var finalarr = arr.concat(rarr)
    console.log(finalarr)
}
rotate()


//IIFE

(function(){
    
        var arr = [1,2,4,6,7,89,0,9]
        var newarr=[]
        var k =3
        for(i=0;i<k;i++){
            newarr.push(arr[i])
        }
        // console.log(newarr)
        var rarr = arr.splice(0,k)
        // console.log(arr)
        var finalarr = arr.concat(rarr)
        console.log(finalarr)
    
})()