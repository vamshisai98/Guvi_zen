//promise using fetch

fetch('https://api.covid19api.com/total/country/india')
.then((res)=>{
    return res.json()
})
.then((resp)=>{
    console.log(resp)
    resp.filter((x)=>{
        let cont = document.getElementById('col-12 bg-danger m-5');
        cont.innerHTML += `
        Date :${x.Date} <br> Active: ${x.Active} <br> Deaths: ${x.Deaths} <br>Recovered: ${x.Recovered} <br>`
    })
})
.catch((err)=>{
    console.log(error)
})