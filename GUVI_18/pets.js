var PetsAvailable = /** @class */ (function () {
    function PetsAvailable(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    PetsAvailable.prototype.insertPet = function (name, id, age) {
        return this.name = name, this.id = id, this.age = age;
    };
    return PetsAvailable;
}());
var petsNew = new PetsAvailable('dog', 1, 2);
console.log(petsNew.insertPet('cat', 2, 3));
