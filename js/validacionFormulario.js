document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Validación de campos obligatorios
        if (name.trim() === "" || lastname.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validación de campo de teléfono para aceptar solo números
        if (!/^\d+$/.test(subject)) {
            alert("Por favor, ingresa solo números en el campo Celular.");
            return;
        }

        // Enviar formulario si todos los campos están completos y el campo Celular solo contiene números
        enviarFormulario(name, lastname, email, subject, message);
    });

    function enviarFormulario(name, lastname, email, subject, message) {
        // Simulamos el envío del formulario (puedes agregar tu lógica de envío aquí)
        alert("¡Su mensaje fue enviado con éxito!");
        form.reset();
    }
});
