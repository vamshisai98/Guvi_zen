// Solving problems using array functions on rest countries data.
// - Get all the countries from Asia continent using Filter function
// - Get all the countries with population of less than 2 lacs using Filter function
// - Print the following details name, capital, flag using forEach function
// - Print the total population of countries using reduce function
// - Print the total population of countries in Asia continent using reduce and filter function
// - Print the contras which use US Dollars as currency. 

// * JSON task 
// https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5
// * Add error handling to the xml http request code

// 1) 
try {
    let data = JSON.parse(this.response);

    data = data.filter(x => x.region == 'Asia')
    console.log(data)
}
catch (err) {
    alert("ERROR")
}

// 2)
try {
    let data = JSON.parse(this.response);
    data = data.filter(x => x.population < 200000)
    console.log(data)
}
catch (err) {
    alert("ERROR")
}

// 3)
try {
    let data = JSON.parse(this.response);
    data.forEach((el) => {
        return console.log('Name: ' + el.name, "Capital: " + el.capital, "flag " + el.flag)
    })
    console.log(data)
}
catch (err) {
    alert("ERROR")
}

// 4)
try {
    let data = JSON.parse(this.response);
    let totalpop = data.reduce((a, b) => {
        return a + b.population
    }, 0)
    console.log(totalpop)
}
catch (err) {
    alert("ERROR")
}

// 5) 
try {
    let data = JSON.parse(this.response);
    data = data.filter((x) => {
        return x.region == 'Asia'
    })
    let tp = data.reduce((a, b) => {
        return a + b.population
    }, 0)
    console.log(tp)
}
catch (err) {
    alert("ERROR")
}

// 6)
try {
    var request = new XMLHttpRequest
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    request.send()
    request.onload = function () {
        let data = JSON.parse(this.response);
        data = data.filter((x) => {
            return x.currencies[0].code == 'USD'
        })
        console.log(data)
    }
}
catch (err) {
    alert("ERROR")
}
