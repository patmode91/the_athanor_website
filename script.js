document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const enterButton = document.getElementById("enter-button");

    enterButton.addEventListener("click", function() {
        if (passwordInput.value === "FORMULAPOTIONSALVATION") {
            alert("Access Granted!");
            // You can add code here to reveal the main content
        } else {
            alert("Access Denied!");
        }
    });
});

