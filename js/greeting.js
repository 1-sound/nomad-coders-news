const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerHTML = `<span>오늘의 코더&nbsp;</span><span id="username">${username}</span>`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    document.title = `${username}'s To Do News`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);}
else {
    paintGreetings(savedUsername);}