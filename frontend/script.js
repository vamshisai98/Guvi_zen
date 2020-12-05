var url = 'https://auth-login-node.herokuapp.com'

function resetPassword() {
    console.log('working')
    document.getElementById('box-1').style.display = "none";
    document.getElementById('box-2').style.display = "block";

}

let closeBox = () => {
    document.getElementById('box-1').style.display = "block";
    document.getElementById('box-2').style.display = "none";
}

let verifyEmail = () => {
    let email = document.getElementById('email1').value
    console.log(email)
  

        fetch(url + '/forgetpassword', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            })
            .then(response => {
                return response.json()
            })
            .then((result) => {
                alert(result.message)
            })
    // else {
    //     alert('Please provide email')
    // }
}

let loginEmail = () => {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email)
    console.log(password)

    if (email !== '' && password !== '') {

        fetch(url + '/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })

            })
            .then(response => {
                return response.json()
            })
            .then((result) => {
                alert(result.message)
                document.getElementById('email').value = ''
                document.getElementById('password').value = ''

            })
    } else {
        alert('Please fill in details')
    }
}


let registerEmail = () => {

    let email = document.getElementById('email2').value;
    let password = document.getElementById('password2').value;
    console.log(email)
    console.log(password)

    if (email !== '' && password !== '') {
        fetch(url + '/register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })

            })
            .then(response => {
                return response.json()
            })
            .then((result) => {
                alert(result.message)
                document.getElementById('email2').value = ''
                document.getElementById('password2').value = ''

            })
    } else {
        alert('Fill in all details')
    }
}


let registerEmaildiv = () => {
    document.getElementById('box-3').style.display = 'block'
    document.getElementById('box-1').style.display = "none";
}
//close register modal
let closeRegister = () => {
    document.getElementById('box-3').style.display = 'none'
    document.getElementById('box-1').style.display = "block";
}