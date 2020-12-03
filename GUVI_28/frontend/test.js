
function updatePwd(){
    
    let url = window.location.href
    let arr = url.split('=')
    let str = arr[1]
    console.log(arr[1])
    console.log(url)
    let password = document.getElementById('password2').value
    console.log(password)
    fetch('http://localhost:3000/updatePassword/'+str,{
        method:"PUT",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({password})

    })
    .then((res)=>{
       if(res.status==200){
           console.log('pwd updated')
           return res.json()
           
       }
    })
    .then((result)=>{
        alert(result.message)
    })
}