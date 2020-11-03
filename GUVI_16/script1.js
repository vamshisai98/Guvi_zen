function creatingElement(myTagName, myClass, myId) {
    let ele = document.createElement(myTagName)
    ele.setAttribute('class', myClass)
    ele.id = myId
    return ele
}
let z=1
async function getData() {
    try {
        let data = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        let response = await data.json()
        console.log(response.results)

        response.results.forEach((x=>{
            
            let container = creatingElement('div', 'container', 'container')
            document.body.append(container)
            
            let box = creatingElement('div', 'box', 'box')
            container.append(box)
            
            let questionCount = creatingElement('div', 'questionCount', 'questionCount')
            
            
            let progressText = creatingElement('h6', 'progressText ml-2', 'progressText')
            progressText.innerText = `Question  ${z}/10`
            
            
            let score = creatingElement('h6', 'score mr-2', 'score')
            score.innerText = "Score: 0"
            questionCount.append(progressText, score)
            
            let questionHeader = creatingElement('div', 'questionHeader', 'questionHeader')
            
            let questionText = creatingElement('h5', 'questionText ml-2')
            questionText.innerText = `${x.question}`
            questionHeader.append(questionText)
            
            let answerBox = creatingElement('div', 'answerBox', 'answerBox')
            
            
            let options1 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options1')
            
            
            let choiceText1 = creatingElement('div', 'choiceText text-white m-3', 'choiceText1')
            choiceText1.innerText = "A"
            
            let choiceBtn = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', 'choiceBtn1')
            choiceBtn.innerText = `${x.incorrect_answers[0]}`
            options1.append(choiceText1, choiceBtn)
            
            
            
            let options2 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options2')
            
            let choiceText2 = creatingElement('div', 'choiceText text-white m-3', 'choiceText2')
            choiceText2.innerText = "B"
            let choiceBtn2 = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', 'choiceBtn2')
            choiceBtn2.innerText = `${x.correct_answer}`
            options2.append(choiceText2, choiceBtn2)
            
            
            let options3 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options3')
            let choiceText3 = creatingElement('div', 'choiceText text-white m-3', 'choiceText3')
            choiceText3.innerText = "C"
            let choiceBtn3 = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', 'choiceBtn3')
            choiceBtn3.innerText = `${x.incorrect_answers[1]}`
            options3.append(choiceText3, choiceBtn3)
            
            let options4 = creatingElement('div', 'options d-flex m-2 bg-primary rounded', 'options4')
            let choiceText4 = creatingElement('div', 'choiceText text-white m-3', 'choiceText4')
            choiceText4.innerText = "D"
            let choiceBtn4 = creatingElement('button', 'btn  btn-outline-primary btn-lg btn-block answer', 'choiceBtn4')
            choiceBtn4.innerText = `${x.incorrect_answers[2]}`
            
            options4.append(choiceText4, choiceBtn4)
            
            answerBox.append(options1, options2, options3, options4)
            
            
            let nextQuestion = creatingElement('div', 'nextQuestion ml-2', 'nextQuestion')
            
            let nextBtn = creatingElement('div', 'btn btn-primary')
            nextBtn.type = "button"
            nextBtn.innerText = "Next"
            nextQuestion.append(nextBtn)
            
box.append(questionCount, questionHeader, answerBox, nextQuestion)
z++

        }))


    } catch (error) {
        console.log(error)
    }

}



getData()

