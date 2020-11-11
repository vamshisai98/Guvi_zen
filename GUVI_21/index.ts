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
        setTimeout(`hit${team}()`, 2000);
    }
}

let cricket = new Cricket();
console.log(cricket.getRuns(0, 6));

let hit1 = (secs) => {
    let final = 0;
    for (let j = 1; j <= 10; j++) {
        let tr = document.createElement("tr");
        let total = 0;
        let td = document.createElement("td");
        td.innerHTML = `PLAYER ${j}`;
        tr.append(td);

        for (let i = 0; i < 6; i++) {
            let run = cricket.getRuns(0, 6);
            total += run;
            let td = document.createElement("td");
            td.id = "td";
            console.log("run:", run);
            td.innerHTML = `${run}`;
            tr.append(td);
            let table1 = document.getElementById('tbody1')
            let trow = table1.querySelectorAll("tr")
            console.log('trow:',trow)

            let tableLen= []
            trow.forEach(function(e){
                tableLen.push(e.querySelectorAll("td").length )
               })
               console.log('value',tableLen)
              

            if (td.innerHTML == "0") {
              
                for(let j=0;j<=tableLen.length;j++){
                    
                    for (let i = 0; i<(8-tableLen[j]); i++) {
                        let td = document.createElement("td");
                        td.innerHTML = "";
                        tr.append(td);
                    }
                  
                }
               break
            }

            // if (run) {
            //     td.innerHTML = `${run}`;
            //     tr.append(td);
            // }
            // else {
            //     td.innerHTML = "0";
            //     tr.append(td);
            //     break;
            // }
        }

        td = document.createElement("td");
        td.innerHTML = `${total}`;
        tr.append(td);
        document.getElementById("tbody1").append(tr);
        final += total;
        document.getElementById("scoreA").innerHTML = `${final}`;

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
let hit2 = () => {
    let final = 0;
    for (let j = 1; j <= 10; j++) {
        let tr = document.createElement("tr");
        let total = 0;

        let td = document.createElement("td");
        td.innerHTML = `PLAYER ${j}`;
        tr.append(td);
        for (let i = 0; i < 6; i++) {
            let run = cricket.getRuns(0, 6);
            total += run;
            let td = document.createElement("td");
            console.log("run:", run);
            if (run) {
                td.innerHTML = `${run}`;
                tr.append(td);
            } else {
                td.innerHTML = "0";
                tr.append(td);
                break;
            }
        }

        td = document.createElement("td");
        td.innerHTML = `${total}`;
        tr.append(td);
        document.getElementById("tbody2").append(tr);
        final += total;
        document.getElementById("scoreB").innerHTML = `${final}`;
        console.log("finalscore", final);
    }
};

let h1 = () => {
    let cricket = new Cricket();
    cricket.timmer(1);
};

let h2 = () => {
    let cricket = new Cricket();
    cricket.timmer(2);
};

let generateResult = () => {
    let score1 = document.getElementById("scoreA");
    let score2 = document.getElementById("scoreB");
    if (score1 > score2) {
        document.getElementById("team").innerText = "TEAM 1";
    } else {
        document.getElementById("team").innerText = "TEAM 2";
    }
};
