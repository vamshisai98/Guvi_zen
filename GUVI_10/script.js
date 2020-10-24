
let calc = document.createElement('div')
calc.setAttribute("class","calculator")
document.body.appendChild(calc)

let res = document.createElement('div')
res.setAttribute("class", "result")
res.innerHTML=`<h1 id="output">0</h1>
<p id="input"></p>`
calc.appendChild(res)
let calckeys =  document.createElement('div')
calckeys.setAttribute("class", "calculator-keys")
calc.appendChild(calckeys)

function creatingElement(element, className, btnval='') {
    var elem = document.createElement(element)
    elem.setAttribute('class', className);
    elem.setAttribute('onclick',btnval)
    return elem;
}

let row1= creatingElement("div","row-1")
calckeys.append(row1)


let button1 = creatingElement('button','operator',"btnval('*')")
button1.innerText="*"

row1.appendChild(button1)

let button2 = creatingElement('button','operator',"btnval('/')")
button2.innerText="/"
row1.appendChild(button2)

let button3 = creatingElement('button','operator',"btnval('C')")
button3.innerText="C"
row1.appendChild(button3)




let row2= creatingElement("div","row-2")
calckeys.append(row2)

let button4 = creatingElement('button','numbers',"btnval('0')")
button4.innerText="0"
row2.appendChild(button4)

let button5 = creatingElement('button','numbers',"btnval('1')")
button5.innerText="1"
row2.appendChild(button5)

let button6 = creatingElement('button','numbers',"btnval('2')")
button6.innerText="2"
row2.appendChild(button6)


let button7 = creatingElement('button','operator',"btnval('%')")
button7.innerText="%"
row2.appendChild(button7)



let row3= creatingElement("div","row-3")
calckeys.append(row3)

let button8= creatingElement('button','numbers',"btnval('3')")
button8.innerText="3"
row3.appendChild(button8)

let button9 = creatingElement('button','numbers',"btnval('4')")
button9.innerText="4"
row3.appendChild(button9)

let button10 = creatingElement('button','numbers',"btnval('5')")
button10.innerText="5"
row3.appendChild(button10)


let button11 = creatingElement('button','operator',"btnval('+')")
button11.innerText="+"
row3.appendChild(button11)



let row4= creatingElement("div","row-4")
calckeys.append(row4)

let button12= creatingElement('button','numbers',"btnval('6')")
button12.innerText="6"
row4.appendChild(button12)

let button13= creatingElement('button','numbers',"btnval('7')")
button13.innerText="7"
row4.appendChild(button13)

let button14= creatingElement('button','numbers',"btnval('8')")
button14.innerText="8"
row4.appendChild(button14)

let button15= creatingElement('button','operator',"btnval('=')")
button15.innerText="="
row4.appendChild(button15)

let row5= creatingElement("div","row-5")
calckeys.append(row5)

let button16= creatingElement('button','numbers',"btnval('9')")
button16.innerText="9"
row5.appendChild(button16)
let button17= creatingElement('button','numbers',"btnval('.')")
button17.innerText="."
row5.appendChild(button17)
let button18= creatingElement('button','numbers',"btnval('AC')")
button18.innerText="AC"
row5.appendChild(button18)
let button19= creatingElement('button','operator',"btnval('=')")
button19.innerText="="
row5.appendChild(button19)

let input = document.getElementById("input")
let output = document.getElementById("output")
function btnval(data) {


    switch (data) {
        case 'AC':
            input.innerHTML = ""
            output.innerHTML = 0;
            break;

        case 'C':
            input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1)
            output.innerHTML = eval(input.innerHTML) === undefined ? 0 : eval(input.innerHTML)
            break;

        case "=":
            output.innerHTML = eval(input.innerHTML) === undefined ? 0 : eval(input.innerHTML)
            break;

        default:
            input.innerHTML += data;
            console.log(data)
    }
}


document.body.onkeydown = function (key) {

    console.log(key)

    if(key.key == "Escape"){
        // console.log('worl')
        btnval('AC')
    }
    else if ( key.keyCode == 13 ) {
        btnval('=')
    }
    else if (key.keyCode == 8) {
        btnval('C')
    }
   
    else if ((key.key >= 0 && key.key <= 9) || key.key == '%' || key.key == '/' ||
        key.key == '*' || key.key == '-' || 
        key.key == '+') {

        btnval(key.key)
    }
    

    else if(key.key!="Shift") {

        alert('Only Numbers Allowed!')
    }

}