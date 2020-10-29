function fetchApi(method,url){
    return new Promise((resolve,reject)=>{
        var request = new XMLHttpRequest()
        request.open(method,url)
        request.onload=function(){
            if(request.status==200){
                resolve(JSON.parse(request.response))
            }
            else{
                reject({
                    message:request.statusText
                })
            }
            request.onerror = function(){
                reject({
                    message:request.statusText
                })
            }
        }
        request.send()
    })
}

fetchApi("GET","https://restcountries.eu/rest/v2/all")
.then((result)=>{
   return result
})
.then((result)=>{
    console.log(result)
    var container = document.createElement('div')
    container.setAttribute("class","container ")
    document.body.appendChild(container)

    result.forEach((x)=>{
       

        let card=document.createElement('div')
        card.setAttribute("class","card  m-2")
        card.setAttribute("style","max-width: 16rem")
        container.appendChild(card)

        let cardheader = document.createElement('div')
        cardheader.setAttribute("class","card-header bg-white")
        cardheader.innerHTML+= x.name
        card.append(cardheader)

        let image = document.createElement('img')
        image.setAttribute("class","card-img-top")
        image.src=`${x.flag}`
        card.append(image)

        let cardbody = document.createElement('div')
        cardbody.setAttribute("class","card-text pl-3")
        cardbody.textContent="Capital:"
        card.append(cardbody)

        let cardcontent = document.createElement('div')
        cardcontent.setAttribute("class","badge badge-primary text-wrap m-2")
        cardcontent.innerHTML=`${x.capital}`
        cardbody.append(cardcontent)

        let cardbody1 = document.createElement('div')
        cardbody1.setAttribute("class","card-text pl-3")
        cardbody1.textContent="Country codes:"
        card.append(cardbody1)

        let cardcontent1 = document.createElement('div')
        cardcontent1.setAttribute("class","badge m-2")
        cardcontent1.innerHTML=`${x.alpha2Code}, ${x.alpha3Code}`
        cardbody1.append(cardcontent1)


        let cardbody2 = document.createElement('div')
        cardbody2.setAttribute("class","card-text pl-3")
        cardbody2.textContent="Region:"
        card.append(cardbody2)

        let cardcontent2 = document.createElement('div')
        cardcontent2.setAttribute("class","badge m-2")
        cardcontent2.innerHTML=`${x.region}`
        cardbody2.append(cardcontent2)


        let cardbody3 = document.createElement('div')
        cardbody3.setAttribute("class","card-text pl-3")
        cardbody3.textContent="Lat,Long:"
        card.append(cardbody3)
        
        let cardcontent3 = document.createElement('div')
        cardcontent3.setAttribute("class","badge m-2")
        cardcontent3.innerHTML=`${x.latlng}`
        cardbody3.append(cardcontent3)




        
    })
})
.catch((error)=>{
    console.log(error)
})
