const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
// console.log(process.argv)
yargs.version=('1.1.0')
//Create an add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{ 
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body content of note',
            demandOption:true,
            type:'string',
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }
})


//Create a remove command
yargs.command({
command:'remove',
describe:'removing the note',
handler:function(){
    console.log('Removing the note')
}
})

//Create a list command
yargs.command({
    command:'list',
    describe:'listing your note',
    handler:function(){
        console.log('listed out the note!')
    }
    })


//Creating a read command
yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log('reading a note!')
    }
    })


console.log(yargs.argv)
