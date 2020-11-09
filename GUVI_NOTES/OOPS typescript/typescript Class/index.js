var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        return this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return 3.14 * (this.radius * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return 2 * 3.14 * (this.radius);
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.toString = function () {
        return "circle radius = " + this.radius;
    };
    return Circle;
}());
var circle = new Circle(10, 'yellow');
console.log(circle.setRadius(20));
console.log(circle.getArea());
console.log(circle.getCircumference());
console.log(circle.getColor());
console.log(circle.toString());
console.log(console.log(circle.getRadius()));
