// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// 아래와 동일한 표현임

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  // console.dir(loginInput);
  // console.log("click!!!!");
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
