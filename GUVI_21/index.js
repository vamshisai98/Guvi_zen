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
        setTimeout("hit" + team + "()", 60000);
    };
    Cricket.prototype.countDown = function () {
        var x = 60;
        var timer = setInterval(function () {
            document.getElementById("countDown").innerHTML = "" + --x;
            if (x == 0) {
                clearInterval(timer);
            }
        }, 1000);
    };
    return Cricket;
}());
var cricket = new Cricket();
var hit1 = function () {
    var final = 0;
    var max = [];
    var highScore = [];
    var _loop_1 = function (j) {
        var tr = document.createElement("tr");
        var total = 0;
        var td = document.createElement("td");
        td.innerHTML = "PLAYER " + j;
        tr.append(td);
        var table1 = document.getElementById("tbody2");
        var trow = table1.querySelectorAll("tr");
        var tableLen = [];
        trow.forEach(function (e) {
            tableLen.push(e.querySelectorAll("td").length);
        });
        var check = 0;
        for (var i = 1; i <= 6; i++) {
            var run = cricket.getRuns(0, 6);
            total += run;
            var td_1 = document.createElement("td");
            td_1.id = "td";
            td_1.innerHTML = "" + run;
            tr.append(td_1);
            if (run == 0) {
                check = i;
                break;
            }
        }
        if ((6 - check || 6 - check == 0) && check != 0) {
            for (var k = 1; k <= 6 - check; k++) {
                var td_2 = document.createElement("td");
                tr.appendChild(td_2);
            }
        }
        td = document.createElement("td");
        td.innerHTML = "" + total;
        tr.append(td);
        document.getElementById("tbody1").append(tr);
        final += total;
        document.getElementById("scoreA").innerHTML = "" + final;
        highScore.push(total);
        max = Math.max.apply(Math, highScore);
    };
    for (var j = 1; j <= 10; j++) {
        _loop_1(j);
    }
    var maxScore = max;
    var index = highScore.indexOf(max) + 1;
    (document.getElementById("player")).innerHTML = "PLAYER " + index;
    (document.getElementById("scoreMax")).innerHTML = "SCORE " + maxScore;
    document.getElementById("hit1").disabled = true;
    document.getElementById("hit2").disabled = false;
};
var hit2 = function () {
    var final = 0;
    var max = [];
    var highScore = [];
    var _loop_2 = function (j) {
        var tr = document.createElement("tr");
        var total = 0;
        var td = document.createElement("td");
        td.innerHTML = "PLAYER " + j;
        tr.append(td);
        var table1 = document.getElementById("tbody1");
        var trow = table1.querySelectorAll("tr");
        var tableLen = [];
        trow.forEach(function (e) {
            tableLen.push(e.querySelectorAll("td").length);
        });
        var check = 0;
        for (var i = 1; i <= 6; i++) {
            var run = cricket.getRuns(0, 6);
            total += run;
            var td_3 = document.createElement("td");
            td_3.id = "td";
            td_3.innerHTML = "" + run;
            tr.append(td_3);
            if (run == 0) {
                check = i;
                break;
            }
        }
        if ((6 - check || 6 - check == 0) && check != 0) {
            for (var k = 1; k <= 6 - check; k++) {
                var td_4 = document.createElement("td");
                tr.appendChild(td_4);
            }
        }
        td = document.createElement("td");
        td.innerHTML = "" + total;
        tr.append(td);
        document.getElementById("tbody2").append(tr);
        final += total;
        document.getElementById("scoreB").innerHTML = "" + final;
        highScore.push(total);
        max = Math.max.apply(Math, highScore);
    };
    for (var j = 1; j <= 10; j++) {
        _loop_2(j);
    }
    var maxScore = max;
    var index = highScore.indexOf(max) + 1;
    (document.getElementById("player1")).innerHTML = "PLAYER " + index;
    (document.getElementById("scoreMax1")).innerHTML = "SCORE " + maxScore;
    document.getElementById("hit2").disabled = true;
    document.getElementById("result").disabled = false;
};
var h1 = function () {
    var cricket = new Cricket();
    cricket.timmer(1);
    cricket.countDown();
};
var h2 = function () {
    var cricket = new Cricket();
    cricket.timmer(2);
    cricket.countDown();
};
var generateResult = function () {
    var score1 = document.getElementById("scoreA").innerText;
    var score2 = document.getElementById("scoreB").innerText;
    if (+score1 > +score2) {
        document.getElementById("team").innerText = "TEAM 1";
        document.getElementById("team2").innerText = "TEAM 1";
    }
    else {
        document.getElementById("team").innerText = "TEAM 2";
        document.getElementById("team2").innerText = "TEAM 2";
    }
    document.getElementById("resultBox").style.display =
        "block";
    var winner = document.getElementById("team");
    if (winner.innerHTML == "TEAM 1") {
        document.getElementById("player").style.display =
            "block";
        document.getElementById("player1").style.display =
            "none";
        document.getElementById("scoreMax").style.display =
            "block";
        document.getElementById("scoreMax1").style.display =
            "none";
    }
    else {
        document.getElementById("player").style.display =
            "none";
        document.getElementById("player1").style.display =
            "block";
        document.getElementById("scoreMax").style.display =
            "none";
        document.getElementById("scoreMax1").style.display =
            "block";
    }
};
