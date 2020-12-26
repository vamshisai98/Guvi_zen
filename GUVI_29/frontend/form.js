var url = 'https://resume-maker-node.herokuapp.com';

var i = 1;
let addWork = () => {
  let div = document.createElement('div');
  div.innerHTML = ` <label for="work-name">COMPANY</label>
   <input type="text" class="form-control" id="work-name${i}" required>
   <label for="work-role">Role</label>
   <input type="text" class="form-control" id="work-role${i}" required>`;
  document.getElementById('work-details').appendChild(div);
  i++;
};

let submitDetails = () => {
  console.log('working');
  let name = document.getElementById('name').value;
  let role = document.getElementById('role').value;

  let schoolName = document.getElementById('school-name').value;
  let schoolCgpa = document.getElementById('school-cgpa').value;
  let schoolYear = document.getElementById('school-year').value;

  let highschoolName = document.getElementById('highschool-name').value;
  let highschoolcgpa = document.getElementById('highschool-cgpa').value;
  let highschoolYear = document.getElementById('highschool-year').value;

  let collegeName = document.getElementById('college-name').value;
  let collegeCgpa = document.getElementById('college-cgpa').value;
  let collegeMajor = document.getElementById('college-major').value;
  let collegeYear = document.getElementById('college-year').value;

  let works = [];
  for (let id = 1; id < i; id++) {
    let workName = document.getElementById(`work-name${id}`).value;
    let workRole = document.getElementById(`work-role${id}`).value;
    works.push({
      workName: workName,
      workRole: workRole,
    });
  }
  console.log(works);

  let skills = document.getElementById('skill-details').value;
  let linkedIn = document.getElementById('linkedin-details').value;
  let github = document.getElementById('github-details').value;
  let email = document.getElementById('email-details').value;

  fetch(url + '/edit', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      name,
      role,
      schoolName,
      schoolCgpa,
      schoolYear,
      highschoolName,
      highschoolcgpa,
      highschoolYear,
      collegeName,
      collegeCgpa,
      collegeMajor,
      collegeYear,
      skills,
      linkedIn,
      github,
      email,
      works,
    }),
  }).then((response) => {
    console.log(response);
    response.json().then((result) => {
      alert(result.message);
      window.location.href = 'portfolio.html';
    });
  });
};

let editDetails = () => {
  fetch(url + '/')
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res[0]);
      document.getElementById('name').value = res[0].name;
      document.getElementById('role').value = res[0].role;

      document.getElementById('school-name').value = res[0].schoolName;
      document.getElementById('school-cgpa').value = res[0].schoolCgpa;
      document.getElementById('school-year').value = res[0].schoolYear;

      document.getElementById('highschool-name').value = res[0].highschoolName;
      document.getElementById('highschool-cgpa').value = res[0].highschoolcgpa;
      document.getElementById('highschool-year').value = res[0].highschoolYear;

      document.getElementById('college-name').value = res[0].collegeName;
      document.getElementById('college-cgpa').value = res[0].collegeCgpa;
      document.getElementById('college-major').value = res[0].collegeMajor;
      document.getElementById('college-year').value = res[0].collegeYear;

      document.getElementById('skill-details').value = res[0].skills;
      document.getElementById('linkedin-details').value = res[0].linkedIn;
      document.getElementById('github-details').value = res[0].github;
      document.getElementById('email-details').value = res[0].email;
    });
};
editDetails();
