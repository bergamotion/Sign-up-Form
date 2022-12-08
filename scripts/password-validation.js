function CheckPassword(inputTxt) { 
    var decimal= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (inputTxt.match(decimal)) return true;
    return false;
} 

passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
    if (!CheckPassword(passwordInput.value)) {
        passwordInput.setCustomValidity("Invalid password");

    } else {
        passwordInput.setCustomValidity("");
    }
});

confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value != passwordInput.value) {
        confirmPassword.setCustomValidity("Password doesn't match");
    } else {
        confirmPassword.setCustomValidity("");
    }
});


