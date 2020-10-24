
//constructive function
function Elf(name,weapon){
    this.name=name,
    this.weapon=weapon
}

const hulk = new Elf('hulk','hammer')

Elf.prototype.attack = function(){
    console.log('attack with' + this.weapon)
}
hulk.attack()    


//factory function
function create(name,weapon){
    return{
        name:name,
        weapon:weapon,
        attack(){
            console.log('attack with'+weapon)
        }
    }
}
const thor = create('thor','hammer')
thor.attack()
// class function

class CreateElf{
    constrctor(name,weapon){
        this.name=name,
        this.weapon=weapon
    }
    attack(){
        console.log('attack with'+this.weapon)
    }
}
const ironman = new CreateElf('ironman','suit')
ironman.attack()


//