function creatingElement(myTagName,myClass,myId){
let ele = document.createElement(myTagName)
ele.setAttribute('class',myClass)
ele.id = myId
return ele
}

let container  = creatingElement('div','container','container')
document.body.append(container)

let info = creatingElement('div','info','info')
container.append(info)

let mainHeading = creatingElement('h2','heading text-center','heading')
mainHeading.innerText="Quick Quiz"

let playBtn = creatingElement('a','btn btn-primary btn-lg btn-block play','play')
playBtn.setAttribute('href','game.html')
playBtn.setAttribute('role','button')
playBtn.innerText="Play"

let highScoreBtn = creatingElement('a','btn btn-primary btn-lg btn-block highScores ','highScores')
highScoreBtn.setAttribute('href','game.html')
highScoreBtn.setAttribute('role','button')
highScoreBtn.innerText="High Scores"

info.append(mainHeading,playBtn,highScoreBtn)