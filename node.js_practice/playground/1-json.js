const fs = require('fs')
const readData = fs.readFileSync('1-json.json')
const dataBuffer = readData.toString()

const parseData = JSON.parse(dataBuffer)
console.log(parseData)

parseData.name = 'Vamshi'
parseData.age=22

const dataJson = JSON.stringify(parseData)

const writefile = fs.writeFileSync('1-json.json',dataJson)


