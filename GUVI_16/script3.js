function creatingElement(myTagName, myClass, myId) {
    let ele = document.createElement(myTagName)
    ele.setAttribute('class', myClass)
    ele.id = myId
    return ele
}

let userName = localStorage.getItem('username')

let score = localStorage.getItem('score')


let container = creatingElement('div', 'container', 'container')
document.body.append(container)

let resultBox = creatingElement('div', 'resultBox', 'resultBox')
container.append(resultBox)

let heading = creatingElement('h2', 'showHighScore', 'showHighScore')
heading.innerText = "High Score"


let userInfo = creatingElement('div', 'userInfo m-3', 'userInfo')
userInfo.innerText = `${userName} ${score}`

let homeBtn = creatingElement('a', 'btn btn-primary m-3 home', 'home')
homeBtn.setAttribute('href', 'index.html')
homeBtn.setAttribute('role', 'button')
homeBtn.innerText = "Go Home"

resultBox.append(heading, userInfo, homeBtn)