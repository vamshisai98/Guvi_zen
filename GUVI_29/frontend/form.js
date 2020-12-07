

let addSchool = ()=>{
   let div = document.createElement('div')
   div.innerHTML =` <label for="school-name">School</label>
   <input type="text" class="form-control" id="school-name">
   <label for="school-cgpa">CGPA</label>
   <input type="text" class="form-control" id="school-cgpa">`

   document.getElementById('school-details').appendChild(div)
}

let addWork = ()=>{
    let div = document.createElement('div')
   div.innerHTML =` <label for="work-name">COMPANY</label>
   <input type="text" class="form-control" id="work-name">
   <label for="work-role">Role</label>
   <input type="text" class="form-control" id="work-role">`

   document.getElementById('work-details').appendChild(div)
}