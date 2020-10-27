
let inputval = "#exmple || @name && user_email ||"
let inp =  inputval.split(' ')
let outval=[]
let out1={}
let out2={}
let out3={}
let out4={}
let out5={}



for(let i=0;i<inp.length;i++){
   
    if(inp[i].includes('#')){
        out1.type = 'intent';
        out1.value= 'exmple'
        outval.push(out1)
     
    }
    if(inp[i].includes('||')){
        out2.type = 'operator';
        out2.value= 'OR'
        outval.push(out2)
    }
    if(inp[i].includes('@')){
        out3.type = 'entity';
        out3.value= 'name'
        outval.push(out3)
    }
    if(inp[i].includes('&&')){
        out4.type = 'operator';
        out4.value= 'AND'
        outval.push(out4)
    }
    if(inp[i].includes('user_email')){
        out5.type = 'variable';
        out5.value= 'user_email'
        outval.push(out5)
    }
    
}
console.log(outval)
