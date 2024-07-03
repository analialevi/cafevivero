document.addEventListener("DOMContentLoaded", async function () {
    const auth = localStorage.getItem("auth");

    if (!auth) {
        window.location.href = "./../pages/login.html";
        return;
    }

    const contactTable = document.getElementById("contactTable").getElementsByTagName("tbody")[0];
    const noContacts = document.getElementById("noContacts");

    async function loadContacts() {
        try {
            const response = await fetch("https://cafevivero.pythonanywhere.com/api/contacts");
            if (!response.ok) {
                throw new Error("Error al obtener los mensajes");
            }
            const contacts = await response.json();

            if (contacts.length === 0) {
                noContacts.innerHTML = "No hay mensajes.";
                contactTable.innerHTML = '';
                return;
            } else {
                noContacts.innerHTML = "";
            }

            contactTable.innerHTML = "";

            contacts.forEach(contact => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${contact.id}</td>
                    <td>${contact.nombre}</td>
                    <td>${contact.apellido}</td>
                    <td>${contact.email}</td>
                    <td>${contact.celular}</td>
                    <td>${contact.motivo}</td>
                    <td>${contact.mensaje}</td>
                    <td><button class="delete-btn" data-contact-id="${contact.id}">Eliminar</button></td>
                `;
                contactTable.appendChild(row);
            });

            contactTable.addEventListener("click", async function (event) {
                if (event.target.classList.contains("delete-btn")) {
                    const contactId = event.target.getAttribute("data-contact-id");
                    await deleteContact(contactId, event.target);
                }
            });
        } catch (error) {
            console.error("Error:", error);
            noContacts.innerHTML = "Error al cargar los contactos.";
        }
    }

    async function deleteContact(contactId, button) {
        console.log("borrando", contactId);
        button.disabled = true;

        try {
            const response = await fetch(`https://cafevivero.pythonanywhere.com/api/contacts/${contactId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Error al eliminar el contacto");
            }
            alert("Contacto eliminado correctamente.");
            loadContacts();
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al eliminar el contacto.");
        } finally {
            button.disabled = false;
        }
    }
    loadContacts();
});

const logout = () => {
    console.log("Saliendo...");
    localStorage.removeItem("auth");
    window.location.href = "./login.html";
};
