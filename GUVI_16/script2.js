function creatingElement(myTagName, myClass, myId) {
    let ele = document.createElement(myTagName)
    ele.setAttribute('class', myClass)
    ele.id = myId
    return ele
}
let score = localStorage.getItem('score')
console.log(score)

let container = creatingElement('div', 'container', 'container')
document.body.append(container)

let result = creatingElement('div', 'result', 'result')
container.append(result)

let heading = creatingElement('h1', 'finalScore', 'finalScore')
heading.innerText = score

let form = creatingElement('form', 'form', 'form')
let usenameBox = creatingElement('div', 'usenameBox', 'usernameBox')

let input = creatingElement('input', 'form-control', 'userInput')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Username')
input.setAttribute('aria-label', 'Username')
input.setAttribute('aria-describedby', 'basic-addon1')
usenameBox.append(input)

let save = creatingElement('div', 'save', 'save')

let buttonSave = creatingElement('button', 'btn btn-primary saveBtn', 'saveBtn')
buttonSave.type = "button"
buttonSave.innerText = "Save"
buttonSave.setAttribute('onclick', 'saveScore()')
save.append(buttonSave)

let playAgainBtn = creatingElement('a', 'btn btn-primary btn-lg btn-block playAgain', 'playAgain')
playAgainBtn.setAttribute('href', 'game.html')
playAgainBtn.setAttribute('role', 'button')
playAgainBtn.innerText = "Play Again"

let goHomeBtn = creatingElement('a', 'btn btn-primary btn-lg btn-block goHome ', 'goHome')
goHomeBtn.setAttribute('href', 'index.html')
goHomeBtn.setAttribute('role', 'button')
goHomeBtn.innerText = "Home"

result.append(heading, form, playAgainBtn, goHomeBtn)
form.append(usenameBox, save)



function saveScore() {
    let saveScore = document.getElementById('finalScore')
    let userInput = document.getElementById('userInput')
    console.log(localStorage.setItem('username', userInput.value))
    console.log(localStorage.setItem('score', saveScore.innerText))
}