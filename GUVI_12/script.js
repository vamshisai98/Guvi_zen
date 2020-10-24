let content = document.createElement('div')
content.className="content"
document.body.appendChild(content)

let paginationTable = document.createElement('div')
paginationTable.className="pagination-table"
content.appendChild(paginationTable)

let table = document.createElement('table')
table.id="table"
paginationTable.appendChild(table)

let thead= document.createElement('thead')
thead.id="thead"
table.appendChild(thead)

let tr = document.createElement('tr')
tr.id = "tr-1"
thead.appendChild(tr)

let th = document.createElement('th')
th.id="th-1"
th.innerText='ID'
tr.appendChild(th)

let th2 = document.createElement('th')
th2.id="th-2"
th2.innerText='Name'
tr.appendChild(th2)

let th3 = document.createElement('th')
th3.id="th-3"
th3.innerText='Email'
tr.appendChild(th3)

let tbody= document.createElement('tbody')
tbody.id="tbody"
table.appendChild(tbody)




let request = new XMLHttpRequest;
request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true)
request.send()
var udata;
request.onload= function(){
    let userdata = JSON.parse(this.response)
    udata=userdata
    // data(1)
    // data(5)
data(1)
}



function data(a){
    let output = ''
    let no_rows = document.getElementById('s-row').value
    
    if(a*no_rows<=100){
        for(let i= (a-1)*no_rows; i<a*no_rows ;i++){
            output +='<tr>'+
                     '<td>'+ udata[i].id + '</td>'+
                     '<td>'+ udata[i].name + '</td>'+
                     '<td>'+ udata[i].email + '</td>'+ '<br>'
                     '</tr>';
        } 
    }
    
    document.getElementById('tbody').innerHTML = output;
}

function selectChange(ele){
data(ele.value)
mylist(ele.value)
}

function createMyFun(tagname,mytype,idname,myfun,myvalue){
    let mytag=document.createElement(tagname)
    mytag.id=idname
    mytag.type=mytype
    mytag.setAttribute('onclick',myfun)
    mytag.value=myvalue

    return mytag
}

function mylist(x){

    let pagecount=document.getElementById('page-count')
    pagecount.innerHTML=""
    
    for(i=1;i<=Math.ceil(100/x);i++){
    
        let btn= createMyFun('input','button',`btn-${i}`,`data(${i})`,i)
        pagecount.append(btn)
        
    }
}
mylist(5)


