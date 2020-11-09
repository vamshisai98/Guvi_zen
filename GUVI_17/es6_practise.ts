//1. Chunk
let chunk = (array,size)=>{
    let rarr = []
    let narr = [...array]
    let arrSize = Math.ceil((narr.length)/size)
    for(let i=0;i<arrSize;i++){
        rarr.push(narr.splice(0,size))
    }
    return rarr

}
chunk([1, 2, 3, 4, 5], 2)


//2.find

let users: = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  let result = users.find(({age})=>{
      return age >30 
  })
  console.log(result)


  //3. reduce


  let multiply = (...args)=>{
      let res =1
      for(let arg of args){
        res = res * arg
      }
      return res
  }

  console.log(multiply(1,2,3,4,5,6))


  //4.filter

  let nusers = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

for(let users in nusers){
    let reuslt = nusers.find(({age})=>{
        return age
    })
}


  //sum 
  let sum = (...args)=>{
    let res =0
    for(let arg of args){
      res = res * arg
    }
    return res
}

console.log(sum(1,2,3,4,5,6))