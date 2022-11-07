let form = document.querySelector("form");
let password = document.getElementById("password");
let Confirm = document.getElementById("Confirm");

function validate() {

    function limit() {
        if (password.value.length < 8 || Confirm.value.length < 8) {
            alert("The passwords are not at least 8 characters long.");
            return false;
        }
        else return true;
    }

    function match() {
        if (password.value != Confirm.value) {
            alert("The passwords entered don't match.");
            return false;
        }
        else return true;
    }

    if (match() && limit())
        alert("Password validated!")
}

form.addEventListener("submit", () => validate())