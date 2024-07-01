document.addEventListener('DOMContentLoaded', function() {
    localStorage.removeItem('auth');

    var emailInput = document.querySelector('input[name="email"]');
    var passInput = document.querySelector('input[name="pass"]');
    var loginButton = document.querySelector('button[type="submit"]');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        var emailValue = emailInput.value;
        var passValue = passInput.value;

        if (emailValue === '' || passValue === '') {
            alert('Por favor, rellena todos los campos.');
        } else if (emailValue === 'admin@codoacodo.com' && passValue === 'codo') {
            localStorage.setItem('auth', 'ey322jn32n423.sfsdfkjdl3243243.fsdfsadf');
            window.location.href = 'admin.html';
        } else {
            alert('Credenciales incorrectas.');
        }

    });
});