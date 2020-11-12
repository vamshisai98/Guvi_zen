class Cricket {
  runs: number;
  min: number;
  max: number;
  teamA: number;
  constructor() {
    this.min = 0;
    this.max = 6;
    this.teamA = 1;
  }
  getRuns(minruns: number, maxruns: number) {
    this.max = maxruns;
    this.min = minruns;
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
  timmer(team: number) {
    this.teamA = team;
    setTimeout(`hit${team}()`, 60000);
  }
  countDown() {
    let x = 60;
    let timer = setInterval(function () {
      document.getElementById("countDown").innerHTML = `${--x}`;
      if (x == 0) {
        clearInterval(timer);
      }
    },1000);
  }
}
let cricket = new Cricket();
let hit1 = () => {
  let final = 0;
  let max: any = [];
  let highScore = [];
  for (let j = 1; j <= 10; j++) {
    let tr = document.createElement("tr");
    let total = 0;
    let td = document.createElement("td");
    td.innerHTML = `PLAYER ${j}`;
    tr.append(td);
    let table1 = document.getElementById("tbody2");
    let trow = table1.querySelectorAll("tr");
    let tableLen = [];
    trow.forEach(function (e) {
      tableLen.push(e.querySelectorAll("td").length);
    });
    let check = 0;
    for (let i = 1; i <= 6; i++) {
      let run = cricket.getRuns(0, 6);
      total += run;
      let td = document.createElement("td");
      td.id = "td";
      td.innerHTML = `${run}`;
      tr.append(td);
      if (run == 0) {
        check = i;
        break;
      }
    }
    if ((6 - check || 6 - check == 0) && check != 0) {
      for (let k = 1; k <= 6 - check; k++) {
        let td = document.createElement("td");
        tr.appendChild(td);
      }
    }
    td = document.createElement("td");
    td.innerHTML = `${total}`;
    tr.append(td);
    document.getElementById("tbody1").append(tr);
    final += total;
    document.getElementById("scoreA").innerHTML = `${final}`;
    highScore.push(total);
    max = Math.max(...highScore);
  }
  let maxScore = max;
  let index = highScore.indexOf(max) + 1;
  (<HTMLInputElement>(
    document.getElementById("player")
  )).innerHTML = `PLAYER ${index}`;
  (<HTMLInputElement>(
    document.getElementById("scoreMax")
  )).innerHTML = `SCORE ${maxScore}`;

  (<HTMLInputElement>document.getElementById("hit1")).disabled = true;
  (<HTMLInputElement>document.getElementById("hit2")).disabled = false;
};
let hit2 = () => {
  let final = 0;
  let max: any = [];
  let highScore = [];
  for (let j = 1; j <= 10; j++) {
    let tr = document.createElement("tr");
    let total = 0;
    let td = document.createElement("td");
    td.innerHTML = `PLAYER ${j}`;
    tr.append(td);
    let table1 = document.getElementById("tbody1");
    let trow = table1.querySelectorAll("tr");
    let tableLen = [];
    trow.forEach(function (e) {
      tableLen.push(e.querySelectorAll("td").length);
    });
    let check = 0;

    for (let i = 1; i <= 6; i++) {
      let run = cricket.getRuns(0, 6);
      total += run;

      let td = document.createElement("td");
      td.id = "td";
      td.innerHTML = `${run}`;
      tr.append(td);
      if (run == 0) {
        check = i;
        break;
      }
    }
    if ((6 - check || 6 - check == 0) && check != 0) {
      for (let k = 1; k <= 6 - check; k++) {
        let td = document.createElement("td");
        tr.appendChild(td);
      }
    }
    td = document.createElement("td");
    td.innerHTML = `${total}`;
    tr.append(td);
    document.getElementById("tbody2").append(tr);
    final += total;
    document.getElementById("scoreB").innerHTML = `${final}`;
    highScore.push(total);
    max = Math.max(...highScore);
  }
  let maxScore = max;
  let index = highScore.indexOf(max) + 1;
  (<HTMLInputElement>(
    document.getElementById("player1")
  )).innerHTML = `PLAYER ${index}`;
  (<HTMLInputElement>(
    document.getElementById("scoreMax1")
  )).innerHTML = `SCORE ${maxScore}`;

  (<HTMLInputElement>document.getElementById("hit2")).disabled = true;
  (<HTMLInputElement>document.getElementById("result")).disabled = false;

};
let h1 = () => {
  let cricket = new Cricket();
  cricket.timmer(1);
  cricket.countDown();

};
let h2 = () => {
  let cricket = new Cricket();
  cricket.timmer(2);
  cricket.countDown();
};
let generateResult = () => {
  let score1 = document.getElementById("scoreA").innerText;
  let score2 = document.getElementById("scoreB").innerText;
  if (+score1 > +score2) {
    document.getElementById("team").innerText = "TEAM 1";
    document.getElementById("team2").innerText = "TEAM 1";
  } else {
    document.getElementById("team").innerText = "TEAM 2";
    document.getElementById("team2").innerText = "TEAM 2";
  }
  (<HTMLInputElement>document.getElementById("resultBox")).style.display =
    "block";

  let winner = document.getElementById("team");
  if (winner.innerHTML == `TEAM 1`) {
    (<HTMLInputElement>document.getElementById("player")).style.display =
      "block";
    (<HTMLInputElement>document.getElementById("player1")).style.display =
      "none";
    (<HTMLInputElement>document.getElementById("scoreMax")).style.display =
      "block";
    (<HTMLInputElement>document.getElementById("scoreMax1")).style.display =
      "none";
  } else {
    (<HTMLInputElement>document.getElementById("player")).style.display =
      "none";
    (<HTMLInputElement>document.getElementById("player1")).style.display =
      "block";

    (<HTMLInputElement>document.getElementById("scoreMax")).style.display =
      "none";
    (<HTMLInputElement>document.getElementById("scoreMax1")).style.display =
      "block";
  }
};
