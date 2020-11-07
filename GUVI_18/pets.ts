type pname = "Dog" | "Bird" | "Cat" | "Fish";

interface PetDetails {
  name: pname;
  count: number;
}

class PetsInfo {
  pets: PetDetails[];

  constructor() {
    this.pets = [];
  }

  insertPet(petInfo: PetDetails) {
    this.pets.push(petInfo);
  }
  listOfPets() {
    return this.pets;
  }
}

class RequestPets {
  requestPets: PetDetails[];
  filterFive: PetDetails[];

  constructor() {
    this.requestPets = [];
    this.filterFive = [];
    
  }
  queryPets(reqPets: PetDetails) {
    this.requestPets.push(reqPets);
  }
  listOfQueries() {
    return this.requestPets;
  }

  filterFirstFive(petsAvail) {
    let petData = petsAvail.listOfPets();
    for (let i = 0; i < 5; i++) {
      this.filterFive.push(this.requestPets[i]);
    }
  
    this.filterFive.forEach((ele) => {
        for(let i=0;i<petData.length;i++){
            if (ele.name == petData[i].name) {
                if (ele.count < petData[i].count) {
                  console.log(`Request successful for ${ele.name} of ${ele.count}`);
                }else{
                    console.log(`pet ${ele.name} is not available as only ${petData[i].count} left`)
                }
              }
        }
      
    });
  
  }

  finalCount(petsAvail){
    let petsLeft = petsAvail.listOfPets();
    let arr = [...this.filterFive]
     arr.forEach((x)=>{
       
            for(let i =0;i<petsLeft.length;i++){
                if(x.name==petsLeft[i].name ){
                    if(x.count<50){
                    petsLeft[i].count = petsLeft[i].count - x.count
                }
                else{
                    petsLeft[i].count =0
                }              
            }
         }
    })
    return arr
  }
}

let petsAvail = new PetsInfo();
petsAvail.insertPet({ name: "Dog", count: 30 });
petsAvail.insertPet({ name: "Cat", count: 20 });
petsAvail.insertPet({ name: "Bird", count: 20 });
petsAvail.insertPet({ name: "Fish", count: 40 });

console.log(petsAvail.listOfPets());

let request = new RequestPets();
request.queryPets({ name: "Dog", count: 5 });
request.queryPets({ name: "Fish", count: 5 });
request.queryPets({ name: "Cat", count: 5 });
request.queryPets({ name: "Dog", count: 2 });
request.queryPets({ name: "Bird", count: 60 });
request.queryPets({ name: "Dog", count: 2 });
request.queryPets({ name: "Cat", count: 3 });

console.log(request.listOfQueries());

console.log(request.filterFirstFive(petsAvail));
console.log(request.finalCount(petsAvail))

console.log(petsAvail.listOfPets());
