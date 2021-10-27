let main = document.getElementsByTagName('main')[0];
let getStartedHTML = document.getElementById('get-started');

function getStartedView() {
    // Clearing the content of getStarted.
    getStartedHTML.remove();
    // Add sign up html to main.
    let signUpHTML = `
    <div id="sign-up">
        <div id="container">
            <h2>Let us create your account</h2>
            <input id="username" type="text" placeholder="Username" autocomplete="off">
            <input id="pin" type="password" placeholder="PIN">
        </div>
        <button id="sign-up" onclick="signIn()">Sign Up</button>
    </div>
    `;
    main.innerHTML += signUpHTML;
    document.title = "Noter - Create account";
}

function signIn() {
    signUpHTML = document.getElementById('sign-up');
    let errorContainer = document.getElementById('error-container');
    let username = document.getElementById('username');
    let pin = document.getElementById('pin');
    let error = `<p class="error">Please fill in credentials</p>`;

    errorContainer.innerHTML = '';
    username.classList.remove('error-input');
    pin.classList.remove('error-input');

    if(!username.value && !pin.value) {
        errorContainer.innerHTML += error;
        username.classList.add('error-input');
        pin.classList.add('error-input');
    } else {
        signUpHTML.remove();
        //main.innerHTML += noteHTML;
        document.title = `${username.value}'s Notes`;
    }
}