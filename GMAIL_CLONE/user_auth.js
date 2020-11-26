let CLIENT_ID = '863125050748-nkjacai5o70po883f9t6neds1t57mnhs.apps.googleusercontent.com';
let API_KEY = 'AIzaSyCDS_5PZVgK1diAYzmic3sl4XB4WkKQ0T0';

// Array of API discovery doc URLs for APIs used by the quickstart
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
let SCOPES = `https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send`;

let authorizeButton = document.getElementById('authorize_button');
let signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function (error) {
        console.error(JSON.stringify(error, null, 2));
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        document.getElementById('main').style.display = 'flex';
        document.getElementById('content').style.display = 'none';
        getMesId(document.querySelector('.active'));
    
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
        document.getElementById('main').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn({
            scope: "https://mail.google.com/ https://www.googleapis.com/auth/gmail.addons.current.message.action https://www.googleapis.com/auth/gmail.addons.current.message.metadata https://www.googleapis.com/auth/gmail.addons.current.message.readonly https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly"
        })
        .then(function () {
            console.log("Sign-in successful");
        })
        .then(loadClient)
        .catch((err) => {
            console.error("Error signing in", err);
        });
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function loadClient() {
    gapi.client.setApiKey(API_KEY);
    return gapi.client.load("https://gmail.googleapis.com/$discovery/rest?version=v1")
        .then(function () {
                console.log("GAPI client loaded for API");
            },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            });
}

function createMyElement(tagName, className = '') {
    let ele = document.createElement(tagName);
    ele.setAttribute('class', className);
    return ele;
}


// Make sure the client is loaded and sign-in is complete before calling this method.
function getMesId(eleBtn) {
    gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'INBOX',
        'maxResults': 10
    }).then(function (response) {
        let container = document.getElementById('my-table');
        container.innerHTML = ``;
        let div = createMyElement('div', 'h5');
        div.id = "heading"
        div.innerHTML = "Inbox";
        let table = createMyElement('table', 'table table-striped table-inbox hidden');
        table.setAttribute('id', 'inbox');
        let thead = createMyElement('thead');
        let tr = createMyElement('tr');
        let th1 = createMyElement('th');
        th1.innerHTML = `From`;
        let th2 = createMyElement('th');
        th2.innerHTML = `Subject`;
        let th3 = createMyElement('th');
        th3.innerHTML = `Date/Time`;
        tr.append(th1, th2, th3);
        thead.appendChild(tr);
        let tbody = createMyElement('tbody');
        tbody.id = `mail-box`;
        table.append(thead, tbody);
        container.append(div, table);
        response.result.messages.forEach(obj => {
            displayMessage(obj.id, "inbox");
        });
    }).catch(err => {
        console.error(err);
    });
}

function displayMessage(msgId, messType) {
    gapi.client.gmail.users.messages.get({
        'userId': 'me',
        'id': msgId,
    }).then(function (response) {
        let data = response.result.payload
        console.log(data)
        let userEmail;
        if (messType == "inbox") {
             userEmail = data.headers.filter(obj => {
                return obj.name == 'From';
            });
        } else {
             userEmail = data.headers.filter(obj => {
                return obj.name == 'To';
            });
        }

        let subject = data.headers.filter(obj => {
            return obj.name == 'Subject';
        });
        let date = data.headers.filter(obj => {
            return obj.name == 'Date';
        });

        let fromValue = userEmail[0]['value'].split('<');
        let dateTime = new Date(date[0].value).toLocaleString(undefined, {
            timeZone: 'Asia/Kolkata'
        });
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${fromValue[0]}</td>
        <td><button id="message-${msgId}" class="message-link" data-toggle="modal" data-target="#messageModal">
          ${subject[0].value}</button>
        </td>
        <td>${dateTime}</td>
      `;
        document.getElementById('mail-box').appendChild(tr);

        document.getElementById(`message-${msgId}`).addEventListener('click', () => {
            readInbox(subject[0].value, getBodyMessage(data));
        })
        console.log(getBodyMessage(data))


    }).catch(err => {
        console.error(err);
    });
}




function readInbox(subject, data) {
    document.getElementById('messageModalLabel').innerHTML = `${subject}`;
    let div = document.getElementById('messageModalBody');
    div.innerHTML = ``;
    let iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'message-iframe');
    div.appendChild(iframe);
    document.getElementById('message-iframe').contentWindow.document.write(data);
}

function getBodyMessage(message) {
    var encodedBody = '';
    if (typeof message.parts == 'undefined') {
        encodedBody = message.body.data;
    } else {
        encodedBody = displayHTML(message.parts);
    }
    encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    return decodeURIComponent(escape(window.atob(encodedBody)));
}

function displayHTML(arr) {
    for (var x = 0; x <= arr.length; x++) {
        if (typeof arr[x].parts === 'undefined') {
            if (arr[x].mimeType === 'text/html') {
                return arr[x].body.data;
            }
        } else {
            return displayHTML(arr[x].parts);
        }
    }
    return '';
}



function sendEmail(ele) {
    let to = document.getElementById('email').value;
    let sub = document.getElementById('subject').value;
    let msg = document.getElementById('message').value;

    ele.disabled = true;

    sendMessage({
            'To': to,
            'Subject': sub
        },
        msg,

    );

    return false;
}

function sendMessage(headersObj, message) {
    let email = '';

    for (let header in headersObj)
        email += header += ": " + headersObj[header] + "\r\n";

    email += "\r\n" + message;

    let sendRequest = gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
            'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
        }
    });

    return sendRequest.execute();
}

function getsentMess(eleBtn) {
    gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'labelIds': 'SENT',
        'maxResults': 10
    }).then(function (response) {
        let container = document.getElementById('my-table');
        container.innerHTML = ``;
        let div = createMyElement('div', 'h5');
        div.innerHTML = "SENT";
        let table = createMyElement('table', 'table table-striped table-inbox hidden');
        table.setAttribute('id', 'inbox');
        let thead = createMyElement('thead');
        let tr = createMyElement('tr');
        let th1 = createMyElement('th');
        th1.innerHTML = `To`;
        let th2 = createMyElement('th');
        th2.innerHTML = `Subject`;
        let th3 = createMyElement('th');
        th3.innerHTML = `Date-Time`;
        tr.append(th1, th2, th3);
        thead.appendChild(tr);
        let tbody = createMyElement('tbody');
        tbody.id = `mail-box`;
        table.append(thead, tbody);
        container.append(div, table);
        response.result.messages.forEach(obj => {
            displayMessage(obj.id, "sent");
        });
    }).catch(err => {
        console.error(err);
    });
}