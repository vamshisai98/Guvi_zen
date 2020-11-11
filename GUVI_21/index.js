var Cricket = /** @class */ (function () {
    function Cricket() {
        this.min = 0;
        this.max = 6;
        this.teamA = 1;
    }
    Cricket.prototype.getRuns = function (minruns, maxruns) {
        this.max = maxruns;
        this.min = minruns;
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
    Cricket.prototype.timmer = function (team) {
        this.teamA = team;
        setTimeout("hit" + team + "()", 2000);
    };
    return Cricket;
}());
var cricket = new Cricket();
console.log(cricket.getRuns(0, 6));
var hit1 = function (secs) {
    var final = 0;
    for (var j = 1; j <= 10; j++) {
        var tr = document.createElement("tr");
        var total = 0;
        var td = document.createElement("td");
        td.innerHTML = "PLAYER " + j;
        tr.append(td);
        var _loop_1 = function (i) {
            var run = cricket.getRuns(0, 6);
            total += run;
            var td_1 = document.createElement("td");
            td_1.id = "td";
            console.log("run:", run);
            td_1.innerHTML = "" + run;
            tr.append(td_1);
            var table1 = document.getElementById('tbody1');
            var trow = table1.querySelectorAll("tr");
            console.log('trow:', trow);
            var tableLen = [];
            trow.forEach(function (e) {
                tableLen.push(e.querySelectorAll("td").length);
            });
            console.log('value', tableLen);
            if (td_1.innerHTML == "0") {
                for (var j_1 = 0; j_1 <= tableLen.length; j_1++) {
                    for (var i_1 = 0; i_1 < (5 - tableLen[j_1]); i_1++) {
                        var td_2 = document.createElement("td");
                        td_2.innerHTML = "";
                        tr.append(td_2);
                    }
                }
                return "break";
            }
        };
        for (var i = 0; i < 6; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        td = document.createElement("td");
        td.innerHTML = "" + total;
        tr.append(td);
        document.getElementById("tbody1").append(tr);
        final += total;
        document.getElementById("scoreA").innerHTML = "" + final;
        console.log("finalscore", final);
    }
    // let time = document.getElementById('countDown')
    // time.innerHTML=`${secs}`
    // let timerSet = setTimeout(`hit1('${secs}')`,2000)
    // console.log(timerSet)
    // if(secs<1){
    //     clearTimeout(timerSet)
    //     time.innerHTML='0'
    // }
    // secs--
};
var hit2 = function () {
    var final = 0;
    for (var j = 1; j <= 10; j++) {
        var tr = document.createElement("tr");
        var total = 0;
        var td = document.createElement("td");
        td.innerHTML = "PLAYER " + j;
        tr.append(td);
        for (var i = 0; i < 6; i++) {
            var run = cricket.getRuns(0, 6);
            total += run;
            var td_3 = document.createElement("td");
            console.log("run:", run);
            if (run) {
                td_3.innerHTML = "" + run;
                tr.append(td_3);
            }
            else {
                td_3.innerHTML = "0";
                tr.append(td_3);
                break;
            }
        }
        td = document.createElement("td");
        td.innerHTML = "" + total;
        tr.append(td);
        document.getElementById("tbody2").append(tr);
        final += total;
        document.getElementById("scoreB").innerHTML = "" + final;
        console.log("finalscore", final);
    }
};
var h1 = function () {
    var cricket = new Cricket();
    cricket.timmer(1);
};
var h2 = function () {
    var cricket = new Cricket();
    cricket.timmer(2);
};
var generateResult = function () {
    var score1 = document.getElementById("scoreA");
    var score2 = document.getElementById("scoreB");
    if (score1 > score2) {
        document.getElementById("team").innerText = "TEAM 1";
    }
    else {
        document.getElementById("team").innerText = "TEAM 2";
    }
};
