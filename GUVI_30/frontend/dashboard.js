


var url = 'https://url-shortner-ap.herokuapp.com'

let id_url = window.location.href
let arr = id_url.split('=')
let str = arr[1]
let getShortUrl = ()=>{
    console.log("working")
    let longURL = document.getElementById('url-link').value
    let shortURL = Math.random().toString(36).substring(7);
    fetch(url+'/shortUrl/'+str,{
        method:"PUT",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            longURL,
            shortURL
        })
    })
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        console.log(result)
        getData()
       
        
    })

}


let getData = ()=>{
    
    fetch(url+'/dashboard/'+str,{
        method : 'GET',
        headers:{
            "Content-type":"application/json",
            authorization:  localStorage.getItem('token')
            
        },
    })
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((result)=>{
  
        document.getElementById('tbody').innerHTML=""
        if(result.url){
            result.url.forEach((x)=>{ 
             let td = document.createElement('td')
             td.innerHTML = x.longURL
             let td1 = document.createElement('td')
             td1.innerHTML = `<a href="https://url-shortner-ap.herokuapp.com/getLongUrl/${x.shortURL}" target="_blank">${x.shortURL}</a>`
             let tr = document.createElement('tr')
             let td2 = document.createElement('td')
             td2.innerHTML= x.count
             tr.append(td,td1,td2)
             document.getElementById('tbody').append(tr)
            })
        }else{
            
            alert(result.message)
            if(alert){
                window.location.href = "index.html"
            }
            
        }
    })
    
}


let signOut = ()=>{
    localStorage.setItem('token','')
    window.location.href = "index.html"
}

getData()