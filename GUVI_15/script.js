
function creatingElement(myTagName, myClass, myId) {
    let ele = document.createElement(myTagName)
    ele.setAttribute('class', myClass)
    ele.setAttribute('id', myId)
    return ele

}


let i = 0;



async function getCountryData() {
    try {
        let data = await fetch('https://restcountries.eu/rest/v2/all')
        let result = await data.json()
        console.log(result)
        let container = creatingElement('div', 'container', 'container')
        document.body.append(container)

        let row = creatingElement('div', 'row', 'row')
        container.append(row)

        result.forEach((x) => {
            let card = creatingElement('div', 'card col-md-4 col-sm-5  m-2')
            card.setAttribute("style", "max-width: 16rem")
            row.appendChild(card)

            let cardheader = creatingElement('div', 'card-header text-center bg-white')
            cardheader.innerHTML = x.name
            card.append(cardheader)

            let image = creatingElement('img', 'card-img-top bg-dark')
            image.src = `${x.flag}`
            card.append(image)

            let cardbody = creatingElement('div', `card-text text-center ${i} pl-3`)
            cardbody.textContent = "Capital:"
            card.append(cardbody)

            let cardcontent = creatingElement('div', 'badge m-2')
            cardcontent.innerHTML = `${x.capital}`
            cardbody.append(cardcontent)

            let cardbody1 = creatingElement('div', `card-text text-center ${i} pl-3`)
            cardbody1.textContent = "Country codes:"
            card.append(cardbody1)

            let cardcontent1 = creatingElement('div', 'badge m-2')
            cardcontent1.innerHTML = `${x.alpha3Code}`
            cardbody1.append(cardcontent1)


            let cardbody2 = creatingElement('div', `card-text text-center ${i} pl-3`)
            cardbody2.textContent = "Region:"
            card.append(cardbody2)

            let cardcontent2 = creatingElement('div', 'badge m-2')
            cardcontent2.innerHTML = `${x.region}`
            cardbody2.append(cardcontent2)

            let cardbody3 = creatingElement('div', `card-text text-center ${i} pl-3`)
            card.append(cardbody3)

            let cardbody4 = creatingElement('button','btn close mb-2 ', `btnTemp${i}`)
            cardbody4.type="button"
            cardbody4.innerHTML=""
            cardbody4.setAttribute('onclick',`myClose('btnTemp${i}')`)
            card.append(cardbody4)

            let tempBtn = creatingElement('button', 'btn btn-outline-primary mb-2', `btn${i}`)
            tempBtn.innerText = 'Click For Weather'
            tempBtn.setAttribute('onclick', `getWeather('${x.name}','btnTemp${i}')`)
            cardbody3.append(tempBtn)

            

           

            i++;
        })
    } catch (error) {
        console.log(error)
    }

}


async function getWeather(name,index) {
    if (name.length > 0) {
        let weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a5b5d4833fb8a7a3f996cebcdb96093d&units=metric`)
        let weatherData = await weatherAPI.json()
        console.log(weatherData.main['temp'])


        let cardTemp = document.getElementById(index);
        cardTemp.innerHTML = `Temperature: ${weatherData.main['temp']} °C`
        cardTemp.style.display='flex'
        cardTemp.style.justifyContent='center'
        cardTemp.style.fontsize='20px'
    

    }

}
 function myClose(btnIndex){
    let btn = document.getElementById(btnIndex)
    btn.style.display='none'
    console.log('empty')

}


getCountryData()