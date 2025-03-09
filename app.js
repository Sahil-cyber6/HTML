let registerBtn = document.querySelector(".Register-btn span");
let loginBtn = document.querySelector(".Login-btn span");
let formBox = document.querySelector(".Form-box");

registerBtn.addEventListener("click", () => {
    formBox.classList.add("change-form");
});

loginBtn.addEventListener("click", () => {
    formBox.classList.remove("change-form");
});
