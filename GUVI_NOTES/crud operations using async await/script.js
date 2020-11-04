async function getData() {
    console.log('function called')
    try {
        let data = await fetch('https://5fa126292541640016b6a8aa.mockapi.io/user')
        let result = await data.json()
        console.log(result)
        
        result.forEach((x) => {
            let tbody = document.getElementById('tbody')
            let tr = document.createElement('tr')
            tr.id = 'tr'
            tbody.append(tr)
            let td = document.createElement('td')
            td.innerText = `${x.id}`

            let td1 = document.createElement('td')
            td1.innerText = `${x.name}`
            let td2 = document.createElement('td')
            td2.innerText = `${x.email}`


            let td3 = document.createElement('td')
            
            let btn1 = document.createElement('button')
            btn1.innerHTML = `<button type="button" class="btn btn-outline-primary p-2 onclick="myEdit()"">Edit</button>`
            td3.append(btn1)

            let td4 = document.createElement('td')
            
            let btn2 = document.createElement('button')
            btn2.innerHTML = `<button type="button" class="btn btn-outline-primary p-2">Delete</button>`
            td4.append(btn2)



            tr.append(td, td1, td2, td3,td4)
        })
    } catch (error) {
        console.log(error)
    }

}

var url = 'https://5fa126292541640016b6a8aa.mockapi.io/user'

function addData() {
    let data = {
        name: document.getElementById('fname').value,
        email: document.getElementById('email').value
    }

    fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((resp) => {
            console.log(resp);
            getData()
            //   window.location.reload()
        }).catch((err) => console.log(err))
        console.log('before calling')
    console.log('after calling')
}