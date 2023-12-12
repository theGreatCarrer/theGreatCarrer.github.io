const user = document.getElementById("user");
const loginButton = document.getElementById("buttonLogin");
const passwordVal = document.getElementById("password");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = user.value;
    const password = passwordVal.value;

    if (username == "habibi" && password == "esternocleidomastoideo") {
        alert("You have successfully logged in.");
        log == true
    }
}
)