const user = document.getElementsByName("uname");
const loginButton = document.getElementById("buttonLogin");
const passwordVal = document.getElementsByName("psw");
const secret1 = document.getElementById("secret1");
const secret2 = document.getElementById("secret2");
const secret3 = document.getElementById("secret3");
const login = document.getElementById("login");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = user.value;
    const password = passwordVal.value;

    if (username == "habibi" && password == "esternocleidomastoideo") {
        alert("You have successfully logged in.");
        secret1.classList.remove("hide")
        secret2.classList.remove("hide")
        secret3.classList.remove("hide")
        secret1.classList.add("unhide")
        secret2.classList.add("unhide")
        secret3.classList.add("unhide")
        login.classList.remove("unhide")
        login.classList.add("hide")
    }
}
)