type pname = 'Dog'|'Bird'|'Cat'|'Fish'

interface PetsInfo{
    name?:pname
    noOfPets?:number
    character?:string
    reqQuantity?:number
    id?:number

    
}

class PetsAvailable{
    pets:Array<PetsInfo>

    constructor( ){
      this.pets=[]
    }

    insertPet(petinfo:PetsInfo ){
       this.pets.push(petinfo)
    
    }
    listOfPets(){
        return this.pets
    }
}

class RequestPets {
    requestpets:Array<PetsInfo>
    constructor(){
        this.requestpets=[]
    }
    checkPets(reqPets:PetsInfo){
        this.requestpets.push(reqPets)
    }
    petsQueue(){
        return (this.requestpets.forEach((x)=>{
            console.log(x.name) 
        }))
    }

    petsStatus(){
        for(let i=0;i<5;i++){
            return this.requestpets.forEach((x)=>{
                return x.name
            })
        }
     

    }
  
  
}

let petsNew = new PetsAvailable()

petsNew.insertPet({name:'Dog',noOfPets:10,character:'friendly',id:1})
petsNew.insertPet({name:'Cat',noOfPets:10,character:'friendly',id:2})
petsNew.insertPet({name:'Fish',noOfPets:10,character:'friendly',id:3})
petsNew.insertPet({name:'Bird',noOfPets:10,character:'friendly',id:4})

console.log(petsNew.listOfPets())


let requestPetAvailablity = new RequestPets()
requestPetAvailablity.checkPets({name:'Dog',reqQuantity:3,id:1})
requestPetAvailablity.checkPets({name:'Cat',reqQuantity:14,id:2})
requestPetAvailablity.checkPets({name:'Bird',reqQuantity:3,id:4})
requestPetAvailablity.checkPets({name:'Cat',reqQuantity:14,id:2})
requestPetAvailablity.checkPets({name:'Fish',reqQuantity:3,id:3})
requestPetAvailablity.checkPets({name:'Cat',reqQuantity:14,id:2})
requestPetAvailablity.checkPets({name:'Fish',reqQuantity:3,id:3})

console.log(requestPetAvailablity.petsQueue())
console.log(requestPetAvailablity.petsStatus())