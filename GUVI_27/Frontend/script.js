var url = 'http://localhost:3000'
var mentorPrev;
function getStudents() {

    fetch(url + '/students')
        .then(response => {
            return response.json()
        })
        .then((result) => {
            console.log(result.data)
            document.getElementById('tbody').innerHTML = ''
            result.forEach(ele => {
                createStudentTable(ele._id, ele.name, ele.email, ele.phno, ele.mentor)
            });
        })
}

function createStudentTable(id, name, email, phno, mentor) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = name
    let td2 = document.createElement("td")
    td2.innerHTML = email
    let td3 = document.createElement("td")
    td3.innerHTML = phno
    let td4 = document.createElement("td")
    td4.innerHTML = `
<button type="button" class="btn btn-dark"><i class="far fa-edit"></i></button>
<button type="button" class="btn btn-dark"><i class="far fa-trash-alt"></i></button>
`
    let td5 = document.createElement("td")
    td5.innerHTML = mentor
    tr.append(td1, td2, td3, td4, td5)
    document.getElementById('tbody').append(tr)
}

function createMentorTable(id, name, email, phno, students) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = name
    let td2 = document.createElement("td")
    td2.innerHTML = email
    let td3 = document.createElement("td")
    td3.innerHTML = phno
    let td4 = document.createElement("td")
    td4.innerHTML = `
    
<button type="button" class="btn btn-dark"><i class="far fa-edit"></i></button>
<button type="button" class="btn btn-dark"><i class="far fa-trash-alt"></i></button>
`
    let td5 = document.createElement("td")
    td5.innerHTML = students
    tr.append(td1, td2, td3, td4, td5)
    document.getElementById('tbody1').append(tr)
}



function createStudents() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phno = document.getElementById("phone").value

    fetch(url + '/add-student', {

            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phno
            })

        })
        .then(response => {
            return response.json()
        })
        .then((result) => {
            document.getElementById('tbody').innerHTML = ""
            alert(result.message)
            getStudents()
        })
}




function createMentors() {
    let name = document.getElementById("name1").value
    let email = document.getElementById("email1").value
    let phno = document.getElementById("phone1").value

    fetch(url + '/add-mentor', {

            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phno
            })

        })
        .then(response => {
            return response.json()
        })
        .then((result) => {
            document.getElementById('tbody1').innerHTML = ""
            alert(result.message)
            getMentors()
        })
}

function getMentors() {

    fetch(url + '/mentors')
        .then(response => {
            return response.json()
        })
        .then((result) => {
            document.getElementById('tbody1').innerHTML = ''

            console.log(result)
            result.forEach(ele => {
                createMentorTable(ele._id, ele.name, ele.email, ele.phno, ele.students)
            });
        })
}



let showMentors = () => {
    fetch(url + '/mentors')
        .then(response => {
            return response.json()
        }).then((res) => {
            document.getElementById('showMentor').innerHTML = ''
            res.forEach((ele) => {
                let option = document.createElement('option')
                option.innerHTML = ele.name
                document.getElementById('showMentor').append(option)
            })

        })

    fetch(url + '/students')
        .then(response => {
            return response.json()
        }).then((res) => {
            document.getElementById('showStudents').innerHTML = ''
            res.forEach((ele) => {
                if (!ele.mentor) {
                    let option = document.createElement('option')
                    option.innerHTML = ele.name
                    document.getElementById('showStudents').append(option)
                }
            })

        })


}


let showStudents = () => {
    fetch(url + '/mentors')
        .then(response => {
            return response.json()
        }).then((res) => {
            document.getElementById('showMentor1').innerHTML = ''
            res.forEach((ele) => {
                let option = document.createElement('option')
                option.innerHTML = ele.name
                document.getElementById('showMentor1').append(option)
            })

        })

    fetch(url + '/students')
        .then(response => {
            return response.json()
        }).then((res) => {
            document.getElementById('showStudents1').innerHTML = '<option>--Select--</option>'
            res.forEach((ele) => {

                let option = document.createElement('option')
                option.innerHTML = ele.name
                document.getElementById('showStudents1').append(option)

            })

        })


}


let assignStudent = () => {
    let mentor = document.getElementById('showMentor').value
    let student = document.getElementById('showStudents').value

    fetch(url + '/assignStudent', {

        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            mentor,
            student
        })

    }).then(res => getMentors())

    fetch(url + '/assignMentor', {

        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            mentor,
            student
        })

    }).then(res => getStudents())
}

let assignMentor = () => {
    let mentor = document.getElementById('showMentor1').value
    let student = document.getElementById('showStudents1').value
    fetch(url + '/assignMentor', {

        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            mentor,
            student
        })

    }).then(res => getStudents())


    fetch(url + '/alterStudent', {
        
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            mentorPrev,
            student
        })

    }).then(res => getMentors())

    fetch(url + '/assignStudent', {
        
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            mentor,
            student
        })

    }).then(res => getMentors())

}



getStudents()
getMentors()





let selectMentor = () => {
    let name = document.getElementById('showStudents1').value
    fetch(url + '/get-student/'+name)
        .then((response) => {
            return response.json()})
        .then((res) => {
            console.log(res)
            document.getElementById('showMentor1').value = res.mentor
            mentorPrev = res.mentor
        })

}

document.getElementById('showStudents1').setAttribute("onchange", "selectMentor()")