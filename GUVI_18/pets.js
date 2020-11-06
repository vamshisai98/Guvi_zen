// type pname = 'Dog'|'Bird'|'Cat'|'Fish'
var PetAvailable = /** @class */ (function () {
    function PetAvailable() {
        this.pets = [];
    }
    PetAvailable.prototype.insertPet = function (petInfo) {
        this.pets.push(petInfo);
    };
    PetAvailable.prototype.petsDetail = function () {
        return this.pets;
    };
    PetAvailable.prototype.changePetCount = function (petType, count) {
        this.pets.forEach(function (ele) {
            if (ele.petType == petType) {
                ele.quantity = count;
            }
        });
    };
    return PetAvailable;
}());
var PetRequest = /** @class */ (function () {
    function PetRequest() {
        this.request = [];
    }
    PetRequest.prototype.createPetRequest = function (petInfo) {
        this.request.push(petInfo);
    };
    PetRequest.prototype.getPetRequest = function () {
        return this.request;
    };
    PetRequest.prototype.petRequestStatus = function (petObj) {
        var _this = this;
        var checkAvail = new PetAvailable();
        var len = 5;
        if (this.request.length < len) {
            len = this.request.length;
        }
        var petsData = petObj.petsDetail();
        var _loop_1 = function (i) {
            petsData.forEach(function (ele) {
                if (ele.petType.toLowerCase() == _this.request[i].petType.toLowerCase()) {
                    if (ele.quantity > _this.request[i].quantity) {
                        console.log("Request for " + _this.request[i].quantity + " " + ele.petType + " is fulfilled");
                        var petAvailCount = ele.quantity - _this.request[i].quantity;
                        petObj.changePetCount(ele.petType, petAvailCount);
                    }
                    else {
                        console.log("Request for " + _this.request[i].quantity + " " + ele.petType + " is not fulfilled because " + ele.quantity + " " + ele.petType + " are left in the shop");
                    }
                }
            });
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
    };
    return PetRequest;
}());
var petAvailable = new PetAvailable();
petAvailable.insertPet({
    petType: 'Cats',
    quantity: 20
});
petAvailable.insertPet({
    petType: 'Dogs',
    quantity: 10
});
console.log(petAvailable.petsDetail());
var requestPet = new PetRequest();
requestPet.createPetRequest({
    petType: 'Cats',
    quantity: 5
});
requestPet.createPetRequest({
    petType: 'Cats',
    quantity: 3
});
requestPet.createPetRequest({
    petType: 'Cats',
    quantity: 1
});
requestPet.createPetRequest({
    petType: 'Dogs',
    quantity: 25
});
console.log(requestPet.getPetRequest());
requestPet.petRequestStatus(petAvailable);
console.log(petAvailable.petsDetail());
