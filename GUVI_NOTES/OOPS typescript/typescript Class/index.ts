class Circle{
    radius:number
    color:string

    constructor(radius ?:number,color ?:string){
        this.radius = radius
        this.color=color
    }
    getRadius():number{
        return this.radius
    }
    setRadius(radius){
        return this.radius=radius
    }
    getArea():number{
        return 3.14*(this.radius*this.radius)
    }
    getCircumference(): number{
        return 2*3.14*(this.radius)
    }
    getColor():string{
        return this.color
    }
    toString():string{
        return `circle radius = ${this.radius}`
    }
}

let circle = new Circle(10,'yellow')

console.log(circle.setRadius(20)) 
console.log( circle.getArea())
console.log(circle.getCircumference())
console.log(circle.getColor())
console.log(circle.toString())
console.log(console.log(circle.getRadius()) )
