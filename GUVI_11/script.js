let nav = document.createElement('nav')
nav.className="nav bg-danger"
document.body.append(nav)

let a= document.createElement('a')
a.className="nav-link text-white"
a.href="index.html"
a.innerText="RandomGen"
nav.append(a)

let a1= document.createElement('a')
a1.className="nav-link text-white"
a1.href="dob.html"
a1.innerText="DOB"
nav.append(a1)


let box = document.createElement('div')
box.className='box';
document.body.appendChild(box)

let boxcontent = document.createElement('div')

boxcontent.className='box-contents'
box.appendChild(boxcontent)

let button  = document.createElement('button')
button.innerText='Generate Random Number'
button.className="generate"
button.setAttribute('onclick','generate(10000000,99999999)')
box.appendChild(button)


var min = 10000000
var max = 99999999
function generate(min,max) {
        var value = Math.floor(Math.random()*(max-min)+min)
        var temp = value.toString().split("");
        var result = new Set(temp)
      
        if(result.size !=temp.length){
                 generate(min,max)
                
        }
        else {
               boxcontent.innerHTML=value
        }

}

// generate(min,max)
        

        
