let form = document.createElement('form')
form.id="reset"
document.body.appendChild(form)


let formgrp = document.createElement('div')
formgrp.id="myform"
form.appendChild(formgrp)

let label = document.createElement('label')
label.for ="exampleInputEmail1"
label.innerText="Email Adress"
formgrp.appendChild(label)

let input = document.createElement('input')
input.type ="email"
input.className="form-control"
input.id="exampleInputEmail1"
formgrp.appendChild(input)



let formgrp1 = document.createElement('div')
formgrp.id="myform1"
form.appendChild(formgrp1)

let label1 = document.createElement('label')
label1.for ="exampleInputPassword1"
label1.innerText="Email Adress"
formgrp1.appendChild(label1)

let input1 = document.createElement('input')
input1.type ="email"
input1.className="form-control"
input1.id="exampleInputPassword1"
formgrp1.appendChild(input1)

let button = document.createElement('button')
button.className="btn btn-primary"
button.type="button"
button.innerText="Submit"
button.setAttribute('onclick',"getData()")
form.appendChild(button)

let table = document.createElement('table')
table.className="table"
document.body.append(table)
let td = document.createElement('td')
td.id="table-data"
table.append(td)

function getData(){
    var email= document.getElementById("exampleInputEmail1").value
    var pass = document.getElementById("exampleInputPassword1").value
    td.innerHTML= email+'<br>'+pass
    table.appendChild(td)
    console.log(td.innerHTML)
    document.getElementById("reset").reset()


}
