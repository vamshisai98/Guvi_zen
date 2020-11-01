function creatingElement(mytagName, myclass, myid) {
    let myEle = document.createElement(mytagName)
    myEle.setAttribute('id', myid)
    myEle.setAttribute('class', myclass)
    return myEle
}
var container = creatingElement("div", "container bg-danger", "container")
document.body.append(container)



let i = 0;
let API_ID = 'b14e9e9b'
let API_KEY = '11e597a47749866efbb409b95072cc89'

function searchRecepie() {
    container.innerHTML=''
   let search = document.getElementById('SEARCH').value
    let APIurl = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    fetch(APIurl)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((result) => {
            console.log(result)
            if(result.count>0){
                result.hits.forEach((x) => {
                    console.log((x))
                    let card = creatingElement('div', `card m-3 col-md-3 c${i}`, 'card')
                    card.setAttribute('style', 'width: 19rem;')
                    container.append(card)
                    let img = creatingElement('img', 'card-img-top mt-2', 'card-image')
                    img.setAttribute('src', `${x.recipe.image}`)
                    card.append(img)
                    let cardBody = creatingElement('div', `card-body c${i}`, 'card-body')
                    card.append(cardBody)
                    let cardTitle = creatingElement('h5', 'card-title text-center', 'card-title')
                    cardTitle.innerText = `${x.recipe.label}`
                    cardBody.append(cardTitle)

                    let cardTitle2 = creatingElement('h6', 'card-title text-center text-danger', 'card-title')
                    cardTitle2.innerText = `${Math.floor(x.recipe.calories)+' '+'calc'}`
                    cardBody.append(cardTitle2)

                    let para = creatingElement('p')
                    cardBody.appendChild(para)
    
                    var button = creatingElement('button', 'btn buttn')
                    button.type = 'button'
                    button.setAttribute('data-toggle', 'collapse')
                    button.setAttribute('aria-expanded', 'false')
                    button.innerText = 'Health labels'
    
                    button.setAttribute('data-target', `#collapseExample${i}`)
                    button.setAttribute('aria-controls', `collapseExample${i}`)
    
                    var collapseBox = creatingElement('div', 'collapse', `collapseExample${i}`)
                    var collapseCard = creatingElement('div', `card card-body c${i}`)
                    collapseCard.innerText = `${x.recipe.healthLabels}`
    
                    para.append(button)
                    cardBody.append(collapseBox)
                    collapseBox.append(collapseCard)
    
    
                   let modalBtn = creatingElement('button','btn  mdbtn mt-1')
                   modalBtn.type='button'
                   modalBtn.setAttribute('data-toggle','modal')
                   modalBtn.setAttribute('data-target',`#staticBackdrop${i}`)
                   modalBtn.innerText='view recipe'
                   cardBody.append(modalBtn)
    
    
                   let cardModal = creatingElement('div','modal fade',`staticBackdrop${i}`)
                   cardModal.setAttribute('data-backdrop','static')
                   cardModal.setAttribute('data-keyboard','false')
                   cardModal.setAttribute('tabindex','-1')
                   cardModal.setAttribute('aria-labelledby','staticBackdropLabel')
                   cardModal.setAttribute('aria-hidden','true')
                   cardBody.append(cardModal)
    
                   let cardModalDialog = creatingElement('div','modal-dialog modal-dialog-centered')
                   cardModal.append(cardModalDialog)
    
                   let modalContent = creatingElement('div','modal-content')
                   cardModalDialog.append(modalContent)
    
                   let modalHeader = creatingElement('div','modal-header')
                   modalContent.append(modalHeader)
    
                   let modalheaderContent = creatingElement('h5','modal-title','staticBackdropLabel')
                   modalheaderContent.innerText='Recipe'
                    modalHeader.append(modalheaderContent)
    
                    let modalCloseBtn = creatingElement('button','close')
                    modalCloseBtn.type='button'
                    modalCloseBtn.setAttribute('data-dismiss','modal')
                    modalCloseBtn.setAttribute('aria-label','Close')
                    modalHeader.append(modalCloseBtn)
    
                    let modalSpan = creatingElement('span')
                    modalSpan.setAttribute('aria-hidden','true')
                    modalSpan.innerHTML='<span>&times;</span>'
                    modalCloseBtn.append(modalSpan)
    
                    let modalBoday = creatingElement('div','modal-body')
                    modalContent.append(modalBoday)
    
                    let modalUL = creatingElement('ul')
                    modalBoday.append(modalUL)
    
                    for(let j=0;j<`${x.recipe.ingredientLines.length}`;j++){
                        var modalLI = creatingElement('li')
                        modalLI.innerHTML=`${x.recipe.ingredientLines[j]}`
                        modalUL.append(modalLI)
                    }
                    let cardFooter = creatingElement('div','card-footer p-1 bg-transparent border-#6c757d63 text-center')
                    card.append(cardFooter)
                    let cardLink = creatingElement('a', 'badge ', 'badge')
                    cardLink.href = `${x.recipe.url}`
                    cardLink.target = 'blank'
                    cardLink.innerText = 'Read More'
                    cardFooter.appendChild(cardLink)
                    let vitamin = document.createElement('div')
                    vitamin.setAttribute('class','vitamin')
                    vitamin.innerHTML=`${x.recipe.totalNutrients['CA']['label']+': '+x.recipe.totalNutrients['CA']['quantity'].toFixed(2)} &nbsp
                    ${x.recipe.totalNutrients['FAT']['label']+': '+x.recipe.totalNutrients['FAT']['quantity'].toFixed(2)} &nbsp
                    ${x.recipe.totalNutrients['FE']['label']+': '+x.recipe.totalNutrients['FE']['quantity'].toFixed(2)} &nbsp
                    ${x.recipe.totalNutrients['VITD']['label']+': '+x.recipe.totalNutrients['VITD']['quantity'].toFixed(2)} &nbsp
                    ${x.recipe.totalNutrients['VITC']['label']+': '+x.recipe.totalNutrients['VITC']['quantity'].toFixed(2)} &nbsp`
                    cardBody.append(vitamin)
                    i++;
    
                })
            }
            else{
                let tryAgain = document.createElement('div')
                tryAgain.setAttribute('class','error')
                tryAgain.innerHTML=`<h1>OOPS!!! The item you are looking for is not available</h1><br>
                <h4>Please Try Again :)</h4>`
                container.append(tryAgain)
            }
       

        })
        .catch((error) => {
            console.log(error)
        })
    console.log(search)
}
