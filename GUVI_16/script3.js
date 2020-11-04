function creatingElement(myTagName,myClass,myId){
    let ele = document.createElement(myTagName)
    ele.setAttribute('class',myClass)
    ele.id = myId
    return ele
    }

let container = creatingElement('div','container','container')
document.body.append(container)

let resultBox = creatingElement('div','resultBox','resultBox')
container.append(resultBox)

let heading = creatingElement('h2','showHighScore','showHighScore')
heading.innerText="High Score"


let userInfo = creatingElement('div','userInfo','userInfo')
userInfo.innerText="demo - 20"

let homeBtn = creatingElement('a','btn btn-primary btn-lg btn-block home','home')
homeBtn.setAttribute('href','index.html')
homeBtn.setAttribute('role','button')
homeBtn.innerText="Go Home"

resultBox.append(heading,userInfo,homeBtn)