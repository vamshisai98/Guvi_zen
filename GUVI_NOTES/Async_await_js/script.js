async function getData(){
    try{
        let response = await fetch('http://www.omdbapi.com/?s=movies&i=tt3896198&apikey=def70435')
        console.log(response)
        let result = await response.json()
        console.log(result.Search)
        let container = document.getElementById('container')
        result.Search.forEach((x)=>{
           container.innerHTML += `  <div class="card" style="width: 18rem;">
            <img src="${x.Poster} " class="card-img-top" id ="card-image">
            <div class="card-body">
              <h5 class="card-title" id="card-title">${x.Title}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="li1">${x.Type}</li>
              <li class="list-group-item" id="li2">${x.Year}</li>
            </ul>
          </div>`
        })
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
getData()