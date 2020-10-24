let nav = document.createElement('nav')
nav.className="nav bg-danger"
document.body.append(nav)

let a= document.createElement('a')
a.className="nav-link text-white"
a.href="index.html"
a.innerText="RandomGen"
nav.append(a)

let a1= document.createElement('a')
a1.className="nav-link text-white"
a1.href="dob.html"
a1.innerText="DOB"
nav.append(a1)



let box = document.createElement('div')
box.className="box"

document.body.append(box)


let heading = document.createElement('h1')
heading.innerText="DOB FINDER"
heading.setAttribute('id',heading)
box.appendChild(heading)

let input1 = document.createElement('input')
input1.type="date"
input1.setAttribute("id","birth_date")

box.appendChild(input1)


let input2 = document.createElement('input')
input2.className="btn"
input2.type="button"
input2.value="DOB"
input2.setAttribute('onclick','Calculate()')

box.appendChild(input2)

let find = document.createElement('div')
find.setAttribute("id","find")
box.appendChild(find)






function Calculate() {
  var birthDate = document.getElementById('birth_date').value;

  var d = new Date(birthDate);

  var mdate = birthDate.toString();
  var yearThen = parseInt(mdate.substring(0, 4), 10);
  var monthThen = parseInt(mdate.substring(5, 7), 10);
  var dayThen = parseInt(mdate.substring(8, 10), 10);

  var today = new Date();
  var birthday = new Date(yearThen, monthThen - 1, dayThen);

  var differenceInMilisecond = today.valueOf() - birthday.valueOf();

  var year = Math.floor(differenceInMilisecond / 31536000000);
  var day = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

  var month = Math.floor(day / 30);

  day = day % 30;

  var tMnt = (month + (year * 12));
  var tDays = (tMnt * 30) + day;

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    document.getElementById("find").innerHTML = ("Invalid birthday - Please try again!");
  }
  else {
    document.getElementById("find").innerHTML ="Year difference:"+" " + year + " years "
      + "<br/> "
      + "Month Difference:"+" "+tMnt + " months " 
      + "<br/>"
      + "Day Count:"+" "+tDays + " days"
      + "<br/>"
      + "Minute Difference:"+" "+ tDays * 24 *60 + " minutes"
      + "<br/>"
      + "Second Difference:"+" "+ tDays * 24 * 3600 + " seconds"
      + "<br/>"
      + "Second Difference:"+" "+tDays * 24 * 3600 * 1000 + " miliseconds";
  }


}