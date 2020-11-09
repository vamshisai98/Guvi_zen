var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//1. Chunk
var chunk = function (array, size) {
    var rarr = [];
    var narr = __spreadArrays(array);
    var arrSize = Math.ceil((narr.length) / size);
    for (var i = 0; i < arrSize; i++) {
        rarr.push(narr.splice(0, size));
    }
    return rarr;
};
chunk([1, 2, 3, 4, 5], 2);
//2.find
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
var result = users.find(function (_a) {
    var age = _a.age;
    return age > 30;
});
console.log(result);
//3. reduce
var multiply = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = 1;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        res = res * arg;
    }
    return res;
};
console.log(multiply(1, 2, 3, 4, 5, 6));
//4.filter
var nusers = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
for (var users_1 in nusers) {
    var reuslt = nusers.find(function (_a) {
        var age = _a.age;
        return age;
    });
}
//sum 
var sum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var res = 0;
    for (var _a = 0, args_2 = args; _a < args_2.length; _a++) {
        var arg = args_2[_a];
        res = res * arg;
    }
    return res;
};
console.log(sum(1, 2, 3, 4, 5, 6));
