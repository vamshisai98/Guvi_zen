var url = 'http://localhost:3000'

function resetPassword(){
    console.log('working')
document.getElementById('box-1').style.display="none";
document.getElementById('box-2').style.display="block";

}

let closeBox=()=>{
    document.getElementById('box-1').style.display="block";
document.getElementById('box-2').style.display="none";
}

let verifyEmail = ()=>{
let email = document.getElementById('email1').value
console.log(email)

fetch(url+'/forgetpassword',{
    method:'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body:JSON.stringify({
        email
    })
})
.then(response=>{
    return response.json()
})
.then((result)=>{
  alert(result.message)
  
   
})
}

