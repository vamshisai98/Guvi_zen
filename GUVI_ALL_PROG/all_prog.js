//1 Write a program to perform input/output of all basic data types.
let a = +userInput[0]
let b= a*a
console.log(b)

//2.Write a program to enter two numbers and find their sum.
let a = userInput[0].split(" ")
let b= +a[0]
let c = +a[1]
let res= b+c
console.log(res)

//3.Write a program to enter two numbers and perform all arithmetic operations.
let a = userInput[0].split(" ")
let b= +a[0]
let c = +a[1]
let sum= b+c;
let sub = b-c
let mul =b*c
let div = b/c
let mod=b%c
console.log(sum)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)


//4.Write a program to enter length and breadth of a rectangle and find its perimeter.
let a = userInput[0].split(" ")
let b= +a[0]
let c = +a[1]
let peri= 2*(b+c);
console.log(peri)

//5.Write a program to enter length and breadth of a rectangle and find its area.
let a = userInput[0].split(" ")
let b= +a[0]
let c = +a[1]
let area= (b*c);
console.log(area)

//6.Write a program to enter radius of a circle and find its diameter, circumference and area.
let a = userInput[0].split(" ")
let b= 5
let dia =2*b
let circ = 2*Math.PI*b*b
let area= 3.14*b*b
console.log(dia)
console.log(circ)
console.log(area)

//7.Write a program to enter length in centimeter and convert it into meter and kilometer.
let a = userInput[0].split(" ")
let b= 4
let m= b/100
let km=m/1000
console.log(m)
console.log(km)

//8.Write a program to enter temperature in Celsius and convert it into Fahrenheit.
let a = userInput[0].split(" ")
let b= 32
let f = (b*(9/5)) +32
console.log(32*f)

//9.Write a program to convert days into years, weeks and days.
let a = userInput[0].split(" ")
let b= 5
let years = b/365
let weeks = b/7
console.log(years)
console.log(weeks)
console.log(b)

//10.Write a program to find power of any number x ^ y.
let a = userInput[0].split(" ")
let b= 2
let c = 3
let power = Math.pow(b,c)
console.log(power)

//11.Write a program to enter any number and calculate its square root.
let a =9
let squareroot=Math.sqrt(9)
console/log(squareroot)

//12.Write a program to enter two angles of a triangle and find the third angle.

let a = 20;
let b = 50
let c = 180-(a+b)
console.log(c)

//13.Write a program to enter base and height of a triangle and find its area.

let h =12
let b=10
let area = 0.5*12*10
console.log(area)

//14.Write a program to calculate area of an equilateral triangle.

let a = 12
let area = (math.sqrt(3)*a*a)/4
console.log(area)


//15.Write a program to enter marks of five subjects and calculate total, average and percentage.

let marks = 34
let marks2 = 40
let marks3 =50
let marks4=90
let marks5 = 90

let total  = marks+marks1+marks2+marks3+marks4+marks5;
let avg = total/5
let per = (total/500)*100

console.log(total)
console.log(avg)
console.log(per)


//16.Write a program to enter P, T, R and calculate Simple Interest.
let p=10
let r =2
let t=4
let si = p(1+r*t)

console.log(si)

//17.Write a program to enter P, T, R and calculate Compound Interest.

let p=10;
let r=2
let t=3
let n=0.2

let ci = Math.pow(p*(1+(r/n)),n*t)

console.log(ci)



//strings
//1.Write a program to find length of a string.
let a = "anvadfs"
console.log(a.length)

//2.Write a program to copy one string to another string.

let str = "orange"
let copy =str.slice()
console.log(copy)

//3.Write a program to concatenate two strings.
let str="abcd"
let str1="efg"
let con=str.concat(str1)
console.log(con)

//4.Write a program to compare two strings.

let str1='abjdkfs'
let str2='alskdfna'
let compare = str1.localeCompare(str2)
console.log(compare)

//5.Write a program to convert lowercase string to uppercase.

let str = 'asdmn'
console.log(str.toUpperCase())

//6.Write a program to convert uppercase string to lowercase.
let str = 'asdmn'
console.log(str.toLowerCase())

//7.Write a program to toggle case of each character of a string.
let a = userInput[0].split("")

let arr2=[]
for(let i=0;i<a.length;i++){
    if(a[i]===a[i].toLowerCase()){
        arr2.push((a[i].toUpperCase()))
    }else if
    (a[i]===a[i].toUpperCase()){
        arr2.push((a[i].toLowerCase()))
    }

}
    console.log(arr2.join(''))


//8.Write a program to find total number of alphabets, digits or special character in a string. 
let s = "Hello.110%4W2orld!!!";
let rx = /[a-z]/gi;
let nx = /\d+/g
let sx = /\W|_/g
let m = s.match(rx);
let num = s.match(nx)
let spl = s.match(sx)
if (m) {
  console.log(m.length);
}
if(num){
    console.log(num.join('').length)
}
if(spl){
    console.log(sx.length)
}


//9.Write a program to count total number of vowels and consonants in a string.

let str = "asnksndeuo"
let v=0;
let c=0;

for(let i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' ||str[i]=='E' ||str[i]=='I' ||str[i]=='O' ||str[i]=='U' ){
        v++
    }else {
        c++
    }

}
console.log(v)
console.log(c)


//10.Write a program to count total number of words in a string.
let str = "hello the world is awesom"
console.log(str.split(" ").length)

//11.Write a program to find reverse of a string.

let str = "abcd"
console.log(str.split('').reverse().join(''))


//12.Write a program to check whether a string is palindrome or not.

let str = 'abccba'
if(str.split('').reverse().join('')==str){
    console.log('palindrome')
}else{
    console.log('not a palindrome')
}

//13.Write a program to reverse order of words in a given string.

let str = "hell the world is awesome"

let str1 = str.split(" ").reverse().join(" ")
console.log(str1)

//14.Write a program to find first occurrence of a character in a given string.
let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}

console.log(arr[0])

//15.Write a program to find first occurrence of a character in a given string.
let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}

console.log(arr[arr.length-1])

//16Write a program to search all occurrences of a character in given string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr =[]
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
console.log(arr)

//17Write a program to count occurrences of a character in given string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let count = 0;

for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        count=count+1
    }

}
console.log(count)

//18.Write a program to find highest frequency character in a string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let count={}
str1.forEach((el)=>{
    count[el]=count[el]+1 || 1

})
let arr = Object.values(count)
let max = Math.max(...arr)

let matched = Object.keys(count).filter((key)=>{
    return count[key]===max
})
console.log(matched)

//19.Write a program to find lowest frequency character in a string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let count={}
str1.forEach((el)=>{
    count[el]=count[el]+1 || 1

})
let arr = Object.values(count)
let min = Math.min(...arr)

let matched = Object.keys(count).filter((key)=>{
    return count[key]===min
})
console.log(matched)

//20.Write a program to count frequency of each character in a string.


let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let count={}
str1.forEach((el)=>{
    count[el]=count[el]+1 || 1

})


let matched = Object.keys(count).filter((key)=>{
    return count
})
console.log(count)


//21.Write a program to remove first occurrence of a character from string.
let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
let remove_str = str1.slice(arr[0],1)
console.log(str1)

//22.Write a program to remove last occurrence of a character from string.
let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
let remove_str = str1.slice(arr[arr.length-1],1)
console.log(str1)

//23.Write a program to remove all occurrences of a character from string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]!==a){
        arr.push(str[i])
    }
}
console.log(arr)
console.log(str1)
//24.Write a program to remove all repeated characters from a given string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = [... new Set (str1)]
console.log(arr)

//25.Write a program to replace first occurrence of a character with another in a string.
let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
str1[arr[0]]='xx';
console.log(str1.join(''))

//26Write a program to replace last occurrence of a character with another in a string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
str1[arr[arr.length-1]]='xx';
console.log(str1.join(''))


//27.Write a program to replace all occurrences of a character with another in a string.

let str ='aszdsds'
let str1 = str.split('')
let a = 's'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
for(let j=0;j<arr.length;j++){
    str1[arr[j]]='abc'
}
console.log(str1.join(''))


//28.Write a program to find first occurrence of a word in a given string.

let str ='hello world hello'
let str1 = str.split(' ')
let a = 'hello'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
console.log(str1[arr[0]])


//28Write a program to find last occurrence of a word in a given string.
let str ='hello world hello'
let str1 = str.split(' ')
let a = 'hello'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
console.log(str1[arr.length-1])

//29Write a program to search all occurrences of a word in given string.
let str ='hello world hello'
let str1 = str.split(' ')
let a = 'hello'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
console.log(arr)

//30Write a program to count occurrences of a word in a given string.
let str ='hello world hello'
let str1 = str.split(' ')
let a = 'hello'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
console.log(arr.length)

//31Write a program to remove first occurrence of a word from string.
let str ='hello world hello'
let str1 = str.split(' ')
let a = 'hello'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
str1.splice(arr[0],1)
console.log(str1.join(' '))

//32Write a program to remove last occurrence of a word in given string.

let str ='hello world hello'
let str1 = str.split(' ')
let a = 'hello'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
str1.splice(arr[arr.length-1],1)
console.log(str1.join(' '))

//33Write a program to remove all occurrence of a word in given string.
let str ='hello world hello'
let str1 = str.split(' ')
let a = 'hello'
let arr = []
for(let i=0;i<str1.length;i++){
    if(str1[i]===a){
        arr.push(i)
    }
}
for(let j=0;j<arr.length;j++){
    str1[arr[j]]='good'
}
console.log(str1.join(''))

//34Write a program to trim leading white space characters from given string.





//37tWrite a program to remove all extra blank spaces from given string.
let srt = 'my  name is   vamshi'; 
let narr = srt.split(' ')
console.log(srt)
let arr =[]
for(let i=0;i<narr.length;i++){
    if(narr[i]!=""){
        arr.push(narr[i])
    }
}
console.log(arr.join(' '))




//functions
//1.Write a program to find cube of any number using function.

function cube(a){
    return a*a*a
}
let res = cube(3)

//2.Write a program to find diameter, circumference and area of circle using functions.
function circle(r){
    let dia = 2*3.14*r
    let circ = 2*3.14*r
    let area = 3.14*r*r

    let ans = 'diameter is:'+dia +""+'circ is:'+circ+'area is:'+area
    return ans
}
let res = circle(4)

//3.Write a program to find maximum and minimum between two numbers using functions.

function max(num1,num2){
    if(num1>num2){
        return 'max:'+num1 +'min:'+num2
    }
    else{
        return 'max:'+num2 +'min:'+num1
    }
    
}
let res = max(3,4)

//4.Write a program to check whether a number is even or odd using functions.

function prime(x){
    if(x%2==0){
        return 'number is even'
    }
    else {
        return 'number is odd'
    }
}
let res = prime(11)

//5.Write a program to check whether a number is prime, Armstrong or perfect number using functions.


function prime(n){
    let flag=true
    for(let i=2;i<=n;i++){
        if(n%i==0){
            flag=false;
            break
        }

    }
    return flag

}

function Armstrong(x){
    let arr = x.toString().split('')
      let arr1=  arr.map(x=>Math.pow(x,arr.length))
     let narr = arr1.reduce(function(a,b){
        return a+b
    })
    // return narr
    if(narr == x ){
        return true
    }
    else{
        return false
    }
}
// let res = Armstrong(131)


let result= verify(2,100)

console.log(res)

function perfect(x){
    let count =0;
    for(let i=0;i<x;i++){
        if(x%i==0){
            count+=i
        }
    }
    if(count==x){
        return true
    }
    else{
        return false
    }
}
let res = perfect(6)
console.log(res)

//6.Write a program to find all prime numbers between given interval using functions.

function getPrime(x,y){
    for(let i=x;i<y;i++){
        let flag = true;
        for(let a=2;a<i;a++){
            if(i%a==0 && i!==a){
                flag= false
                break
            }
        }
        if(flag==true){
            console.log(i)
        }
    }
}
let res = getPrime(0,100)
console.log(res)

//7.Write a program to print all strong numbers between given interval using functions.

function fact(n){
    if(n==0||n==1)
    return 1
    else{
        return n*fact(n-1)
    }
}
function strong(n){
    let arr = n.toString().split('')
    let narr = arr.map(x=>fact(x))
    let arr1 = narr.reduce(function(a,b){
        return a+b
    },0)
    if(arr1==n){
        return true
    }
    
}
function toCheck(start,end){
    for(let i=start;i<end;i++){
        if(strong(i)){
            console.log(i)
        }
       
    }
}

let check = toCheck(12,200)


//8.Write a program to print all Armstrong numbers between given interval using functions.




function Armstrong(x){
    let arr = x.toString().split('')
      let arr1=  arr.map(x=>Math.pow(x,arr.length))
     let narr = arr1.reduce(function(a,b){
        return a+b
    })
    // return narr
    if(narr == x ){
        return true
    }
    else{
        return false
    }
}
// let res = Armstrong(131)
function verify(start,end){
    for(let i = start;i<end;i++){
        if(Armstrong(i)){
            console.log(i)
        }
    }
}
let res = verify(1,200) 

//Write a program to print all perfect numbers between given interval using functions.

function perfect(x){
    let count =0;
    for(let i=0;i<x;i++){
        if(x%i==0){
            count+=i
        }
    }
    if(count==x){
        return true
    }
    else{
        return false
    }
}
function verify(start,end){
    for(let i = start;i<end;i++){
        if(perfect(i)){
            console.log(i)
        }
    }
}
let res = verify(1,200) 
let res = perfect(6)
console.log(res)






















//functions -using recurssions

//1Write a program to find power of any number using recursion.

function power(a,n){
    if(n===0){
        return a
    }
    else{
        
        return a* power(a,n-1)
    }
   
}
let res = power(3,4)

///2Write a program to print all even or odd numbers in given range using recursion.






