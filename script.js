var passwordInput = document.getElementById('password');
var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (passwordInput.value === 'FORMULAPOTIONSALVATION') {
        alert('Access Granted!');
        // Here you would typically redirect to the actual content
    } else {
        alert('Access Denied!');
    }
});

