async function submitForm(event) {
    event.preventDefault();
    
    const formData = {
        nombre: document.getElementById('name').value,
        apellido: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('subject').value,
        motivo: document.getElementById('reason').value,
        mensaje: document.getElementById('message').value
    };
    
    try {
        const response = await fetch('http://cafevivero.pythonanywhere.com/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('El contacto se envió correctamente.');
        } else {
            alert('Hubo un problema al enviar el contacto.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el contacto.');
    }
}