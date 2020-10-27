//1

var num = 10;
function addFive(num) { 
var add_num = num+5
return add_num;
}
var result = addFive(num)

//2

var num = 5;
function getOpposite(num) {

    if(Math.floor(num)==num){
        return num*-1
    }
    else{
        return -1
    }
}
var result = getOpposite(num)

//3

var min = 5;
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(min)

//4

var mystr = "5";
function toInteger(mystr) {
    return +mystr
}
var myint = toInteger(mystr)

//5

var myint = 0;
function nextNumber(myint) {
    return myint+1
}
var myNextint = nextNumber(myint)

//6

var arr = [1, 2, 3];
function getFirstElement(arr) {

    return arr[0]
}
var data = getFirstElement(arr)

//7

var arr = [1, 2, 3];
function hourToSeconds(arr) {
    
    return arr.map((x)=>{
        return x*3600
    })

}
var data = hourToSeconds(arr)

//8

function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var peri = findPerimeter(6,7)

//9


function lessThan100(num1,num2) {
    if(num1+num2<100){
        return true
    }
    else{
        return false
    }
}
var res = lessThan100(22,15)

//10

function remainder(num1,num2) {
    return num1%num2
}

var res = remainder(1,3)

//11

function CountAnimals(tur,horse,pigs) {
    return (2*tur)+(4*horse)+(4*pigs)
}
var legs = CountAnimals(2,3,5)

//12

function frames(num1,num2) {

    return ((num1*60)/num2)
}
var fps = frames(1,2)

//13

function divisibleByFive(num1) {
    if(num1%5===0){
        return true
    }
    else{
        false
    }
}
var divisible = divisibleByFive(5)

//14
function isEven(num){
    if(num%2===0){
        return true
    }
    else if(num!==+num){
        return -1
    }
    else{
        return false
    }
   }
   var even = isEven(5)


//15   
function areBothOdd(num1, num2){
    if(num1%2!==0 && num2%2!==0){
        return true
    }
    else{
        return false
    }
   }
   let result = areBothOdd(3,10)

   //16

   
function getFullName(firstName, lastName){
    return firstName+lastName
   }
   let res = getFullName('GUVI','Geek')

   //17
   function getLengthOfWord(word1){
       if(word1!==+word1){
           return word1.length
       }
       else{
           return -1
       }
}
let res =getLengthOfWord("GUVI")

//18

function isSameLength(word1, word2){
    if(word1.length==word2.length){
        return true
    }
    else{
        return false
    }
   }

   //19


   console.log(getDistance(100, 100, 400, 300));
    function getDistance(x1, y1, x2, y2)

    {
        let ans =  Math.sqrt((Math.pow(x2-x2,2)+Math.pow(y2-y1,2)))
        return ans
    }


   //20

   function getNthElement(array,n){
       if(array.length!=0){
           return array[n]
       }
       else{
           return undefined
       }
   }
   let res = getNthElement([1, 3, 5], 1)

   //21

   function getLastElement(array){
    if(array.length!=0){
        return array[array.length-1]
    }
    else{
        return -1
    }
}
let res = getLastElement([1, 2, 3, 4])
   
//22

var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
       if((obj.hasOwnProperty(key))){
           return obj[key]
       }
       else{
           return false
       }
   }
let res = getProperty(obj,'mykey')

//23

var obj = {
   
   };
   function addProperty(obj, key){
      return obj[key] = "true"
   }
   let res = addProperty(obj,"mykey")


   //24
   var obj={
       name:'vamshi'
   }
function removeProperty(obj, key){
    return delete obj.name

}
let res = removeProperty(obj,"name")

//25

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let parr = [...arr]
    let final_arr = []
    parr.filter(x=>x>0)
    let count = parr.length
    final_arr.push(count)

    let neg_arr = [...arr]
    neg_arr.filter(x=>x<0)
    neg_arr.reduce(function(a,b){
        return a+b
    },0)
    let neg_sum = neg_arr
    final_arr.push(neg_sum)
    return final_arr
   
 
}
console.log(ar2(arr));


//26

function getPositives(ar)
{
 return arr.filter((x)=>{
     return x>=0
 })

}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//27

function powersOfTwo(n){
    let res = ''
  for(let i=0;i<=n;i++){
   
    let ans = Math.pow(2,i)
   res+=ans+","
  }
  return res

  }
  let num = powersOfTwo(3)

  //28

  function findMax(ar)
{
    let ans = Math.max(...ar)
    return +ans
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);


console.log("Max: ", max);

//29

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " -> ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
    let prime = true
for(let i=2;i<n;i++){
    if(n%i==0){
        prime=false
        break
    }

}
return prime
}
printPrimes(100);


//30


// Returns true if a number is prime
function isPrime(n)
{
 let prime = true;
 for(let i=2;i<=n;i++){
     prime=false;
     break
 }
 return prime
}

function getPrimes(nPrimes, startAt)
{
// your code here
 isPrime(n)
}
console.log(getPrimes(10, 100));


//31

function reverseString(s)
{
    let res = s.split('').reverse().join('')
    return res
}
var s = reverseString("JavaScript");
console.log(s);

//32
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(let ex of ar2){
     result.push(ex)
 }
 
 return result;
}
var ar = mergeArrays(ar1, ar2);
console.log(ar);


//33
    function sumCSV(s)
    {

    let ans = s.split(",")
    let arr =[]
    for(let i=0;i<ans.length;i++){
       arr.push(+ans[i])
    }

    let add = arr.reduce(function(a,b){
        return a+b
    },0)
    return add
    }
    console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
