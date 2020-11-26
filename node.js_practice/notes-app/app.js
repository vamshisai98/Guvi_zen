const getNotes = require('./notes')
const chalk = require('chalk')
let writeNotes = getNotes("Your notes....")

console.log(writeNotes)
console.log(chalk.yellow.inverse('Success!'))