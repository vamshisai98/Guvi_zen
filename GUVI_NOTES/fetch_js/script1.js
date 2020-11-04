let fixerAPI='http://data.fixer.io/api/latest?access_key=fb0f7660a29dfadde3722b176def73fa&format=1'
let restAPI='https://restcountries.eu/rest/v2/all'

fetch(restAPI)
.then((resp)=>{
    return resp.json()
})
.then((result)=>{
    console.log(result)
    var val = prompt('enter a numnber');
    var cdata= (result[`${val}`].currencies[0].code)
    return fetch(fixerAPI+'&symbols='+ cdata)
  
})
.then((fixerResult)=>{
    console.log(fixerResult)
    return fixerResult.json()
   
})
.then((final)=>{
    console.log(final)
 
        let div = document.createElement('div')
        div.className="container"
        document.body.append(div)
        div.innerHTML = `Base<h1>${final.base}</h1><br>
        <h1>Date${final.date}</h1><br>
        <h1>Rates:${Object.values(final.rates)}</h1>`


})
.catch((error)=>{
    console.log(error)

   
})