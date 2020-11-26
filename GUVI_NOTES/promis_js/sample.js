let p = new Promise((resolve,reject)=>{
    
    setTimeout(function(){
        let x=2
        if(x==2){
            resolve(x)

        }else{
            reject(x)
        }
    },2000)
})
p.then((result)=>{
    console.log('hi')
}).catch((err)=>{
    console.log(err,"error")
})