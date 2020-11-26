let fs = require('fs')

fs.readFile('sample.js','utf8',(err,data)=>{
    console.log(data)
})

fs.writeFile('write.js','created a new file using fs.writeFile',(err,data)=>{
    console.log("data daved")
})

fs.appendFile('read.js','I am appending without overwriting',(err,data)=>{
    console.log("file appended")
})
// I am appending without overwriting
fs.unlink('delete.js',(err)=>{
    console.log("deleted")
})
// I am appending without overwriting