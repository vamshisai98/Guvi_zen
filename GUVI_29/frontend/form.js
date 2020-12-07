



let addWork = ()=>{
    let div = document.createElement('div')
   div.innerHTML =` <label for="work-name">COMPANY</label>
   <input type="text" class="form-control" id="work-name">
   <label for="work-role">Role</label>
   <input type="text" class="form-control" id="work-role">`

   document.getElementById('work-details').appendChild(div)
}