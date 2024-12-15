// Alternar entre formularios
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}

// Manejo del registro
function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Guardar usuario en localStorage
    localStorage.setItem('usuario', JSON.stringify({ email, password }));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    toggleForms();
}

// Manejo del login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Obtener usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.password === password) {
        alert('Inicio de sesión exitoso.');
        localStorage.setItem('usuarioIniciado', 'true'); // Marcar sesión iniciada
        window.location.href = "/htmls/carrito.html"; // Redirigir al carrito
    } else {
        alert('Credenciales incorrectas. Verifica tu correo y contraseña.');
    }
}