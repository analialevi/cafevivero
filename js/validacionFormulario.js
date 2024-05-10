document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 


        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

 
        enviarFormulario(name, email, subject, message);
    });

    function enviarFormulario(name, email, subject, message) {



        alert("¡Su mensaje fue enviado con éxito!");


        form.reset();


        setTimeout(function() {

        }, 5000); // Mostrar el mensaje durante 5 segundos (5000 milisegundos)
    }
});
