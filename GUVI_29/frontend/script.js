
var url ="http://localhost:3000"
let fetchCall = ()=>{

    fetch(url+'/')
        .then((resp) => {
            console.log(resp)
            return resp.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("bio-name").innerHTML = res[0].name
            document.getElementById("role").innerHTML = res[0].role
    
            document.getElementById("school").innerHTML = res[0].schoolName
            document.getElementById("school-year").innerHTML = res[0].schoolYear
            document.getElementById("school-cgpa").innerHTML = res[0].schoolCgpa
    
            document.getElementById("highschool").innerHTML = res[0].highschoolName
            document.getElementById("highschool-year").innerHTML = res[0].highschoolYear
            document.getElementById("highschool-cgpa").innerHTML = res[0].highschoolcgpa
    
            document.getElementById("college").innerHTML = res[0].collegeName
            document.getElementById("college-year").innerHTML = res[0].collegeYear
            document.getElementById("college-major").innerHTML = res[0].collegeMajor
            document.getElementById("college-cgpa").innerHTML = res[0].collegeCgpa
    
            document.getElementById('skill-details').value = res[0].skills
            document.getElementById("contact-email").innerHTML = res[0].email
            document.getElementById("contact-linkedin").innerHTML = res[0].github
            document.getElementById("contact-github").innerHTML = res[0].github
    
            res[0].works.forEach((x) => {
                document.getElementById('work-content').innerHTML += `
           <div class="row work col-md-12 col-sm-12 mt-3 ">
           <div class="work-heading col-md-6 col-sm-6" id="work">${x.workName}</div>
           <div class="work-role col-md-12 col-sm-12 " id="work-role">${x.workRole}</div>
       </div>
           `
            })
    
    
    
        })
}



fetchCall()