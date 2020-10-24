var request = new XMLHttpRequest;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    let data =JSON.parse(this.response);
    data.map((obj)=>{
        if(obj.latlng[0]&&obj.latlng[1])
        {
            let apiKEY = "a5b5d4833fb8a7a3f996cebcdb96093d";
            
        let apiURL=`https://api.openweathermap.org/data/2.5/weather?lat=${obj.latlng[0]}&lon=${obj.latlng[1]}&appid=${apiKEY}&units=metric`;
        var request = new XMLHttpRequest;
        request.open('Get',apiURL,true)
        request.send()
        request.onload = function(){
            let temp = JSON.parse(this.response)
            console.log(obj.name,'--',temp.main.temp)


           
        }
        }
    })

}