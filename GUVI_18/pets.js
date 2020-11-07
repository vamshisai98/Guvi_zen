var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var PetsInfo = /** @class */ (function () {
    function PetsInfo() {
        this.pets = [];
    }
    PetsInfo.prototype.insertPet = function (petInfo) {
        this.pets.push(petInfo);
    };
    PetsInfo.prototype.listOfPets = function () {
        return this.pets;
    };
    return PetsInfo;
}());
var RequestPets = /** @class */ (function () {
    function RequestPets() {
        this.requestPets = [];
        this.filterFive = [];
    }
    RequestPets.prototype.queryPets = function (reqPets) {
        this.requestPets.push(reqPets);
    };
    RequestPets.prototype.listOfQueries = function () {
        return this.requestPets;
    };
    RequestPets.prototype.filterFirstFive = function (petsAvail) {
        var petData = petsAvail.listOfPets();
        for (var i = 0; i < 5; i++) {
            this.filterFive.push(this.requestPets[i]);
        }
        this.filterFive.forEach(function (ele) {
            for (var i = 0; i < petData.length; i++) {
                if (ele.name == petData[i].name) {
                    if (ele.count < petData[i].count) {
                        console.log("Request successful for " + ele.name + " of " + ele.count);
                    }
                    else {
                        console.log("pet " + ele.name + " is not available as only " + petData[i].count + " left");
                    }
                }
            }
        });
    };
    RequestPets.prototype.finalCount = function (petsAvail) {
        var petsLeft = petsAvail.listOfPets();
        var arr = __spreadArrays(this.filterFive);
        arr.forEach(function (x) {
            for (var i = 0; i < petsLeft.length; i++) {
                if (x.name == petsLeft[i].name) {
                    if (x.count < 50) {
                        petsLeft[i].count = petsLeft[i].count - x.count;
                    }
                    else {
                        petsLeft[i].count = 0;
                    }
                }
            }
        });
        return arr;
    };
    return RequestPets;
}());
var petsAvail = new PetsInfo();
petsAvail.insertPet({ name: "Dog", count: 30 });
petsAvail.insertPet({ name: "Cat", count: 20 });
petsAvail.insertPet({ name: "Bird", count: 20 });
petsAvail.insertPet({ name: "Fish", count: 40 });
console.log(petsAvail.listOfPets());
var request = new RequestPets();
request.queryPets({ name: "Dog", count: 5 });
request.queryPets({ name: "Fish", count: 5 });
request.queryPets({ name: "Cat", count: 5 });
request.queryPets({ name: "Dog", count: 2 });
request.queryPets({ name: "Bird", count: 60 });
request.queryPets({ name: "Dog", count: 2 });
request.queryPets({ name: "Cat", count: 3 });
console.log(request.listOfQueries());
console.log(request.filterFirstFive(petsAvail));
console.log(request.finalCount(petsAvail));
console.log(petsAvail.listOfPets());
