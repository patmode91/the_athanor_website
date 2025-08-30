var passwordInput = document.getElementById('password');
var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    if (passwordInput.value === 'FORMULAPOTIONSALVATION') {
        alert('Access Granted!');
    } else {
        alert('Access Denied!');
    }
});

