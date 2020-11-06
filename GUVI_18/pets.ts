type pname = 'Dog'|'Bird'|'Cat'|'Fish'

interface PetsInfo{
    name:pname
    age:number
    quantity:number
    
    
}

class PetsAvailable{
    name:pname
    age:number
    quantity:number
    pets:Array<PetsInfo>

    constructor( ){
      this.pets=[]
    }

    insertPet( ){
       
    
    }
}


let petsNew = new PetsAvailable('dog',1,2)

console.log(petsNew.insertPet('cat',2,3))