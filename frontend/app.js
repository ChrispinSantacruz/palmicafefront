
// Manejo de Registro y Login con Fetch
const baseURL = "http://localhost:4000"; // Cambiar si el backend usa otro host/puerto

// Función para mostrar mensajes
function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
}

// Manejo del registro
document.getElementById('form-register').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch(`${baseURL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        showMessage(data.message || "Registro exitoso");
    } catch (error) {
        showMessage("Error al registrar: " + error.message);
    }
});

// Manejo del login
document.getElementById('form-login').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        showMessage(data.message || "Inicio de sesión exitoso");
    } catch (error) {
        showMessage("Error al iniciar sesión: " + error.message);
    }
});
