const button = document.getElementById('get-started');
const main = document.getElementsByTagName('main')[0];
const getStartedHTML = document.getElementById('get-started');

const signUpHTML = `
    <div id="sign-up">
        <div id="container">
            <h2>Let us create your account</h2>
            <input id="username" type="text" placeholder="Username" autocomplete="off">
            <input id="pin" type="password" placeholder="PIN">
        </div>
        <button id="sign-up">Sign Up</button>
    </div>
`;

button.addEventListener('click', getStarted);

function getStarted() {
    // Clearing the content of getStarted.
    getStartedHTML.remove();
    // Add sign up html to main.
    main.innerHTML += signUpHTML;
    document.title = "Noter - Create account"
}