var APIurl = 'https://api.giphy.com/v1/gifs/search?api_key=hAKjDUPa4ekmmt4Gecc3TSitQ9zTep4V&q=smiley&limit=5&offset=0&rating=g&lang=en'

fetch(APIurl)
    .then((result)=>{
        console.log(result)
        return result.json()
        
    })
    .then((resp)=>{

        console.log(resp)

        var container = document.createElement('div')
        container.setAttribute=("class","container")
        document.body.append(container)

        resp.data.forEach((x)=>{
            let div1=document.createElement('div')
            div1.setAttribute('class','box')
            container.append(div1)

            let image = document.createElement('object')
            image.setAttribute('class','img-disp')
            image.data=`${x.embed_url}`
            div1.append(image)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
