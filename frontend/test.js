
function updatePwd(){
    
    let url = window.location.href
    let arr = url.split('=')
    let str = arr[1]
    console.log(arr[1])
    console.log(url)
    let password = document.getElementById('password2').value
    console.log(password)

    if(password !==''){
        fetch('https://auth-login-node.herokuapp.com/updatePassword/'+str,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({password})
    
        })
        .then((res)=>{
           if(res.status==200){
               console.log('password updated, please redirect to login page and login again!')
               return res.json()
               
           }
        })
        .then((result)=>{
            alert(result.message)
            document.getElementById('password2').disabled ='true'
            document.getElementById('password2').value =''
        })
    }
    else{
        alert('type in your password')
    }
}