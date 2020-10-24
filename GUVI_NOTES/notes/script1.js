// const elf={
// 	name:'dery',
// 	weapon:'stone',
// 	attack(){
// 		console.log('attack with '+elf.weapon)
// 	}
// }
// console.log(elf.name)
// elf.attack()
// const elf2={
// 	name:'emy',
// 	weapon:'fire',
// 	attack(){
// 		console.log('attack with '+this.weapon)
// 	}
// }
// console.log(elf2.name)
// elf2.attack()

// //factory functions. 

// function createelf(name,weapon){
// 	return{
// 		name:name, //for es6 name 
// 		weapon:weapon, //for es6 weapon
// 		attack(){
// 			console.log('attack with'+weapon)
// 		}
// 	}
// }

// const thor =createelf('thor','thunder')
// thor.attack() 

// //constructor function 
// function Elf(name,weapon){
// 	this.name=name,
// 	this.weapon=weapon
// }
// const hulk = new Elf('hulk','hammer') 
// Elf.prototype.attack = function(){
// 	console.log('attack with '+ this.weapon)
// } 
// Elf.prototype.build = function(){
// 	console.log('build the empire')
// } 
// hulk.attack()
// hulk.build()

// //class 

class CreateElf{
constructor(name,weapon){
		this.name=name,
		this.weapon=weapon
	}
	attack(){
		console.log('attack with '+this.weapon)
	}
}

const ironman = new CreateElf('ironman','laser')
ironman.attack()

// console.log(ironman instanceof CreateElf) // return true 


//Binding of 'this' keyword 

// 1. new keyword will link 'this' keyword with whatever object that it is calling 

// implicit binding 
const stu={
	name:'ashwini',
	hi(){
		console.log('hi '+this.name)
	}
}

//stu.hi() 

//explicit binding 


// const person2={
// 	name:"ashwini",
// 	hi:function(){
// 		console.log('hi '+this.name)
// 	}.bind(person1)
// }
// const person1={
// 	name:'ashok',	
// }

//person2.hi() 

//arrow function 
var name='abcd';

const magic ={
	name:'ashwini',
	hi: function() {
	var innerfunc=()=>{
		console.log('hi '+this.name)
	} 
return innerfunc(); }
}

magic.hi()

//call apply 

const marvel={
	name:'thor',
	health:80,
	heal(num1,num2){
		return this.health += num1+num2;
	}
}

const DC={
	name:'batman',
	health: 50
}

const incredibles ={
	name:'elastic girl',
	health: 200
}

// console.log('before' , marvel)
// marvel.heal()
// console.log('after' , marvel)

console.log('before' , DC)// 50
marvel.heal.call(incredibles, 50,30) 
console.log('after' , DC) //130

console.log('before' , DC)
marvel.heal.apply(incredibles, [100,50]) 
console.log(DC)
console.log('after' , DC)











