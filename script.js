var passwordInput = document.getElementById('password');
var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (passwordInput.value === 'FORMULAPOTIONSALVATION') {
        console.log("Access Granted!");
        // Here you would typically redirect to the actual content
    } else {
        console.log("Access Denied!");
    }
});

