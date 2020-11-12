// Client ID and API key from the Developer Console
var CLIENT_ID = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXmnhs.apps.googleusercontent.com';
                 
var API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ';
              
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');
var compose = document.getElementById('compose-button');
let table = document.getElementById('contentTable')
let pre = document.getElementById('content')

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
        appendPre(JSON.stringify(error, null, 2));
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
        compose.style.display = 'block';
        table.style.display = 'block'
        content.style.display='block'
        // listLabels();
        displayInbox()
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
        compose.style.display = 'none';
        table.style.display = 'none'
        content.style.display='none'
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print all Labels in the authorized user's inbox. If no labels
 * are found an appropriate message is printed.
 */
function listLabels() {
    gapi.client.gmail.users.labels.list({
        'userId': 'me'
    }).then(function (response) {
        var labels = response.result.labels;
        appendPre('Labels:');

        if (labels && labels.length > 0) {
            for (i = 0; i < labels.length; i++) {
                var label = labels[i];
                appendPre(label.name)
            }
        } else {
            appendPre('No Labels found.');
        }
    });
}
function displayInbox() {
    gapi.client.gmail.users.messages.list({
        'userId': 'me',
        // 'id': this.id,
        'maxResults': 10
    }).then(function (response) {
        var messages = response.result.messages;
        appendPre('Message:');
        let userId = 'me'
        console.log(messages)
        if (messages && messages.length > 0) {
            for (i = 0; i < messages.length; i++) {
                var message = messages[i];
                appendPre(message.id)
                console.log(getData(userId,message.id))
            }
        } else {
            appendPre('No Messages found.');
        }
    })
}


function sendEmail() {
    let sendBtn = document.getElementById('send-button')
    sendBtn.setAttribute('class', 'disabled')
    sendMessage({
            'To': document.getElementById('compose-to').value,
            'Subject': document.getElementById('compose-subject').value
        },
        document.getElementById('compose-message').value
    );

    return false;
}

async function getData(userId,id) {
    try {
        let response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userId}/messages/${id}`)
        let res = await response.json()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
console.log(getData(message.id))

console.log(displayInbox())


