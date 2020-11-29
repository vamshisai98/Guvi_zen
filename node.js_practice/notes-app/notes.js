const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.find((note)=> note.title==title)


    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }
    else{
        console.log(chalk.red.inverse('title already taken!'))
    }
  
}

const removeNote = (title)=>{
const notes = loadNotes()
const notesToKeep = notes.filter((note)=>{
    return note.title !== title 
})
if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note removed!'))
saveNotes(notesToKeep)

}else{
    console.log(chalk.red.inverse('No Note Found!'))
}
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const listNote = ()=>{
    const notes  = loadNotes()
    console.log(chalk.white.inverse('Your notes'))  
    notes.forEach((note)=>console.log(note.title))

}

const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.grey(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('note not found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote,

}