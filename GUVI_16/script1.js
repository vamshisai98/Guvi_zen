function creatingElement(myTagName, myClass, myId) {
    let ele = document.createElement(myTagName)
    ele.setAttribute('class', myClass)
    ele.id = myId
    return ele
}
let z = 1
let i=0
let s =0
async function getData() {
    try {
        let data = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        let response = await data.json()
        console.log(response.results)


        let container = creatingElement('div', 'container', 'container')
        document.body.append(container)

        let box = creatingElement('div', 'box', 'box')
        container.append(box)

        
        let score = creatingElement('h6', 'score mr-2', 'score')
        score.innerText = `Score: ${s}`       
        box.append(score)
         

        response.results.forEach((x => {


            let questionCount = creatingElement('div', 'questionCount', 'questionCount')

            let progressText = creatingElement('h6', 'progressText ml-2', 'progressText')
            progressText.innerText = `Question  ${z}/10`
            questionCount.append(progressText)

            let questionHeader = creatingElement('div', 'questionHeader', 'questionHeader')


            let questionText = creatingElement('h5', 'questionText ml-2')
            questionText.innerText = `${x.question}`
            questionHeader.append(questionText)

            let answerBox = creatingElement('div','answerBox',`answerBox${i}`)


            let options1 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options1')


            let choiceText1 = creatingElement('div', 'choiceText text-white m-3', 'choiceText1')
            choiceText1.innerText = "A"

            let choiceBtn = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', `choiceBtn1${i}`)
            choiceBtn.innerText = `${x.incorrect_answers[0]}`
            choiceBtn.setAttribute('onclick',`wrongAnswer('choiceBtn1${i}','answerBox${i}')`)
            options1.append(choiceText1, choiceBtn)



            let options2 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options2')

            let choiceText2 = creatingElement('div', 'choiceText text-white m-3', 'choiceText2')
            choiceText2.innerText = "B"
            let choiceBtn2 = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', `choiceBtn2${i}`)
            choiceBtn2.innerText = `${x.correct_answer}`
            choiceBtn2.setAttribute('onclick',`correctAnswer('choiceBtn2${i}','answerBox${i}')`)
            
            options2.append(choiceText2, choiceBtn2)


            let options3 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options3')
            let choiceText3 = creatingElement('div', 'choiceText text-white m-3', 'choiceText3')
            choiceText3.innerText = "C"
            let choiceBtn3 = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', `choiceBtn3${i}`)
            choiceBtn3.innerText = `${x.incorrect_answers[1]}`
            choiceBtn3.setAttribute('onclick',`wrongAnswer('choiceBtn3${i}','answerBox${i}')`)
            options3.append(choiceText3, choiceBtn3)

            let options4 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options4')
            let choiceText4 = creatingElement('div', 'choiceText text-white m-3', 'choiceText4')
            choiceText4.innerText = "D"
            let choiceBtn4 = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', `choiceBtn4${i}`)
            choiceBtn4.innerText = `${x.incorrect_answers[2]}`
            choiceBtn4.setAttribute('onclick',`wrongAnswer('choiceBtn4${i}','answerBox${i}')`)

            options4.append(choiceText4, choiceBtn4)

            answerBox.append(options1, options2, options3, options4)

            box.append(questionCount, questionHeader, answerBox)
            z++
            i++

        }))
        
        let finishQuestion = creatingElement('div', 'finishQuestion ml-2', 'finishQuestion')
    
        let finishBtn = creatingElement('a', 'btn btn-danger finish mt-3 mb-3')
        finishBtn.innerText = "finish"
        finishBtn.setAttribute('href','end.html')
        finishBtn.setAttribute('role','button')
        box.append(finishQuestion)
        finishQuestion.append(finishBtn)


    } catch (error) {
        console.log(error)
    }

}

function wrongAnswer(choice,answerBox){
    console.log('wrong answer')
   
        let btnchoice = document.getElementById(choice)
        btnchoice.style.background = 'red'
        btnchoice.setAttribute('disabled',true)

        let div = document.getElementById(answerBox)
        div.style.pointerEvents = "none"
      
   
  

}
function correctAnswer(choice1,answerBox){
    console.log('correct answer')
    let btnchoice1 = document.getElementById(choice1)
    btnchoice1.style.background = 'green'
    btnchoice1.setAttribute('disabled',true)
    
    let div = document.getElementById(answerBox)
    div.style.pointerEvents = "none"

    let scoreBoard = document.getElementById('score')
    scoreBoard.innerText = `Score: ${s=s+10}`
}   



getData()