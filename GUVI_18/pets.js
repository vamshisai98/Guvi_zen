var PetsAvailable = /** @class */ (function () {
    function PetsAvailable() {
        this.pets = [];
    }
    PetsAvailable.prototype.insertPet = function (petinfo) {
        this.pets.push(petinfo);
    };
    PetsAvailable.prototype.listOfPets = function () {
        return this.pets;
    };
    return PetsAvailable;
}());
var RequestPets = /** @class */ (function () {
    function RequestPets() {
        this.requestpets = [];
    }
    RequestPets.prototype.checkPets = function (reqPets) {
        this.requestpets.push(reqPets);
    };
    RequestPets.prototype.petsQueue = function () {
        return (this.requestpets.forEach(function (x) {
            console.log(x.name);
        }));
    };
    return RequestPets;
}());
var petsNew = new PetsAvailable();
petsNew.insertPet({ name: 'Dog', noOfPets: 10, character: 'friendly', id: 1 });
petsNew.insertPet({ name: 'Cat', noOfPets: 10, character: 'friendly', id: 2 });
petsNew.insertPet({ name: 'Fish', noOfPets: 10, character: 'friendly', id: 3 });
petsNew.insertPet({ name: 'Bird', noOfPets: 10, character: 'friendly', id: 4 });
console.log(petsNew.listOfPets());
var requestPetAvailablity = new RequestPets();
requestPetAvailablity.checkPets({ name: 'Dog', reqQuantity: 3, id: 1 });
requestPetAvailablity.checkPets({ name: 'Cat', reqQuantity: 14, id: 2 });
requestPetAvailablity.checkPets({ name: 'Bird', reqQuantity: 3, id: 4 });
requestPetAvailablity.checkPets({ name: 'Cat', reqQuantity: 14, id: 2 });
requestPetAvailablity.checkPets({ name: 'Fish', reqQuantity: 3, id: 3 });
requestPetAvailablity.checkPets({ name: 'Cat', reqQuantity: 14, id: 2 });
console.log(requestPetAvailablity.petsQueue());
