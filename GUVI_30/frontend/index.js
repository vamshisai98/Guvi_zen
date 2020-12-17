var url = 'https://url-shortner-ap.herokuapp.com'
const proxyurl = "https://cors-anywhere.herokuapp.com/";

let signUp = () => {
   console.log('working')
   document.getElementById('register-form').style.display = "block"
   document.getElementById('login-form').style.display = "none"
}

let login = () => {
   document.getElementById('register-form').style.display = "none"
   document.getElementById('login-form').style.display = "block"
}

let forgetPassword = () => {
   document.getElementById('register-form').style.display = "none"
   document.getElementById('login-form').style.display = "none"
   document.getElementById('verification-form').style.display = "block"

}

let backLogin = () => {
   document.getElementById('register-form').style.display = "none"
   document.getElementById('login-form').style.display = "block"
   document.getElementById('verification-form').style.display = "none"
}

let userLogin = () => {
   let email = document.getElementById('email').value.trim()
   let password = document.getElementById('password').value.trim()
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
         .then((response) => {
            return response.json()

         })
         .then((result) => {
            alert(result.message)
            if (result.status === 200) {
               localStorage.setItem('token', result.token)
               window.location.href = `/dashboard.html?_id=${result.result._id}`
            }
         })

   } else {
      alert('Fill in all details')
   }
}

let userRegister = () => {
   let username = document.getElementById('username-register').value.trim();
   let email = document.getElementById('email-register').value.trim();
   let password = document.getElementById('password-register').value.trim();
   console.log(username)
   console.log(email)
   console.log(password)
   if (email !== '' && password !== '') {
      fetch(url + '/register', {
            method: 'POST',
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify({
               username,
               email,
               password
            })

         })
         .then(response => {
            return response.json()
         })
         .then((result) => {
            alert(result.message)
         })



   }
}


let verifyEmail = () => {
   let email = document.getElementById('email-verify').value
   console.log(email)


   fetch( url + '/forgetpassword', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify({
            email
         })
      })
      .then((response) => {
         return response.json()
      })
      .then((result) => {
         alert(result.message)
      })

}