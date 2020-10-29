
// ---------------------
// var data = prompt("Enter age to check");

// var p = new Promise(function (resolve, reject) {
//   if (data >= 18) {
//     resolve("allow him to vote");
//   } else {
//     reject("no eligible to vote");
//   }
// });

// // console.log(p);

// p.then(function (value) {
//   console.log(value);
// }).catch(function (error) {
//   console.log(error);
// });

var p = new Promise((resolve, reject) => {
    let temp = parseInt(prompt('enter a value'))
   temp = temp + 1;
  
    if (temp == 2) {
      setTimeout(() => {
        resolve(temp);
      }, 2000);
    } else {
      reject(temp);
    }
  });
  
  p.then((result) => {
    console.log("result", result);
  }).catch((err) => {
    console.error("error", err);
  });


  //chaining
  var p = new Promise((resolve, reject) => {
    let temp = parseInt(prompt('enter a value'))
   temp = temp + 1;
  
    if (temp == 2) {
      setTimeout(() => {
        resolve(temp);
      }, 2000);
    } else {
      reject(temp);
    }
  });

  p.then((result) => {
    console.log("result", result);
    return result + 10;
  })
    .then((result2) => {
      console.log("result2", result2);
      return result2 + 5;
    })
    .then((result3) => {
      console.log("result3", result3);
    })
    .catch((err) => {
      console.error("error", err);
    });

    /// Promise-all

    var promise1 = new Promise((resolve, reject) => {
        if (true) {
          setTimeout(() => {
            resolve("Valid Promise 1");
          }, 1000);
        } else {
          reject("Rejected Promise 1");
        }
      });
      
      var promise2 = new Promise((resolve, reject) => {
        if (true) {
          setTimeout(() => {
            resolve("Valid Promise 2");
          }, 2000);
        } else {
          reject("Rejected Promise 2");
        }
      });
      
      var promise3 = new Promise((resolve, reject) => {
        if (false) {
          setTimeout(() => {
            resolve("Valid Promise 3");
          }, 2000);
        } else {
          reject("Rejected Promise 3");
        }
      });

      
      /// XMLHttpRequest using Promise

      function makeRequest(method, url) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.onload = function () {
            if (xhr.status == 200) {
              resolve(xhr.response);
            } else {
              reject({
                message: xhr.statusText,
              });
            }
            xhr.onerror = function () {
              reject({
                message: xhr.statusText,
              });
            };
          };
          xhr.send();
        });
      }
      makeRequest("GET", "https://api.covid19api.com/total/country/india")
        .then((result) => {
          console.log(JSON.parse(result));
        })
        .catch((error) => {
          console.log(error);
        });
      