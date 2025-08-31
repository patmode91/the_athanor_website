document.getElementById("enter-button").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.value === "FORMULAPOTIONSALVATION") {
        alert("Access Granted!");
            window.location.href = "content.html";
    } else {
        alert("Access Denied!");
    }
});

