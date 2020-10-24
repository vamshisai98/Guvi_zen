var div = document.createElement('div');
div.setAttribute('class', 'name');
document.body.appendChild(div);

var image = document.createElement('img');
image.setAttribute("class", "avatarImage")
image.setAttribute("src", "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
div.appendChild(image)

var bar = document.createElement('div')
bar.setAttribute('class', 'bar')
div.appendChild(bar)


var bioname = document.createElement('div')
bioname.setAttribute("class","bio-name")
div.appendChild(bioname)

var namedetails = document.createElement('div')
namedetails.setAttribute("class","name-details")
namedetails.textContent="BRIAN DUBEY"
bioname.appendChild(namedetails)

var adress = document.createElement('div')
adress.setAttribute('class','address')
adress.textContent="N.Damen Avenue, Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com"
document.body.appendChild(adress)


var main = document.createElement('div')
main.setAttribute('class','main')
document.body.appendChild(main)

var main0 = document.createElement('div')
main0.setAttribute('class','main-0')
main.appendChild(main0)

var main1 = document.createElement('div')
main1.setAttribute('class','main-1')
main1.innerHTML= `  <div class="profile">
<div class="profile-pic">
    <i class="fas fa-user"></i>
</div>
<span>Profile</span>
<p>Innovative optimized solution seeker. Excited to be at the deployement phase of my new career as
    a web developer. I am ambitious,adventurous,assiduous,animated,and an a literation advocate.
</p>

</div>
<div class="profile">
<div class="profile-pic">
    <i class="fas fa-flask"></i>
</div>
<span>Skills</span>
<h2>Technical Skills</h2>
<table>
    <tr>
        <td>Javascript</td>
        <td>
            <div class="progress-1">
                <div class="length1"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>CSS</td>
        <td>
            <div class="progress-1">
                <div class="length2"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>React</td>
        <td>
            <div class="progress-1">
                <div class="length3"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Redux</td>
        <td>
            <div class="progress-1">
                <div class="length4"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Mongo</td>
        <td>
            <div class="progress-1">
                <div class="length5"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Deployement</td>
        <td>
            <div class="progress-1">
                <div class="length6"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
</table>
<h2>Additional Skills</h2>
<table>
    <tr>
        <td>Project Management</td>
        <td>
            <div class="progress-1">
                <div class="length2"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Recruitment</td>
        <td>
            <div class="progress-1">
                <div class="length3"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Business Development</td>
        <td>
            <div class="progress-1">
                <div class="length1"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Editing</td>
        <td>
            <div class="progress-1">
                <div class="length5"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
    <tr>
        <td>Fundraising</td>
        <td>
            <div class="progress-1">
                <div class="length3"></div>
                <div class="circle"></div>
            </div>
        </td>
    </tr>
</table>

</div>


<div class="profile">
<div class="profile-pic">
    <i class="fas fa-briefcase"></i>
</div>
<span>Work experience</span>
<div class="work">Event Manager
    <div class="date">03/2014-02/2017</div>
</div>
<label>C3 Presents, Washington DC </label>
<ul>
    <li>lead and excute all phases of event planning and production spanning committee recruitment,
        training, vendor relationships and on-site facilitation</li>
    <li>Brought new business to the organisation through relentless networking and stewardship which
        helped the company win the bid for the State Department Summit on the Middle East and the
        companies largest civic event to date, the United State of Women</li>
    <li>Exercise fiscal control over budget creation,tracking and reporting. Collaborate with
        employees at all organizational levels to advance cohesive operations</li>
</ul>

</div>`
main0.appendChild(main1)


var main2 = document.createElement('div')
main2.setAttribute('class','main-2')
main2.innerHTML=` <div class="profile">
<div class="profile-pic">
    <i class="fas fa-briefcase"></i>
</div>
<span>Work experience</span>
<div class="work">Community Relations<br> Manager
    <div class="date">06/2011-01/2014</div>
</div>
<label>Gay & Lesbian Elder Housing, Los Angeles</label>
<ul>
    <li>Arrangin presentations and pitch deck.</li>
    <li>Designing a PR plan and establishing important focus points.</li>
    <li>Designing, creating and managing content across multiple communication platforms</li>
    <li>Building relationshipswith key media players</li>
</ul>

</div>



<div class="profile">
<div class="profile-pic">
    <i class="fas fa-graduation-cap"></i>
</div>
<span>Education</span>
<div class="work">Engineering Immersion<br> Program
    <div class="date">11/2018-06/2018</div>
</div>
<label>Thinkful Chicago, IL</label><br>
<label>Project-focused intensive program with emphasis of Mongo,<br><label></label>Express,React and
    Javascript(MERN) technical stack
</label></label>
<ul>
    <li>Developed a full stack web application,"RenewU", using React that allows user to explore
        various aspects of meditation. User's progress is stored on a backend created using Node and
        MongoDB</li>
    <li>Developed a language learning app,"Foodie Phonetics" using spaced repition and a linked list
        data structure. React was used to create the front end components while Node and Mongo were
        used to create a backend that stores user data.</li>
    <li>Developed a concierge app,"Pley", for individuals looking for curated suggestions when
        visiting a new place. React was used to develop the front end which includes real-time chat,
        drag and drop and variety of advanced features. The backend, built using Node,Express and
        Mongo,takes advantage of well-developed RESTful API, Geospatial searching,and user
        authentication with JWT</li>
</ul>
<div class="work">BA,English
    <div class="date">09/2001-09/2005</div>
</div>
<label>University of California,Los Angles</label>

</div>`
main0.appendChild(main2)






