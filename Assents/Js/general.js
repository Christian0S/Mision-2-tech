function toggleNav() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('nav-active'); // Activa o desactiva la visibilidad del nav

}

window.onload = function() {
    // Verificar si la sesión está iniciada
    const usuarioIniciado = localStorage.getItem('usuarioIniciado');
    
    // Si la sesión está iniciada, mostrar el botón de cerrar sesión
    if (usuarioIniciado) {
        document.getElementById('cerrar-sesion').style.display = 'inline'; // Mostrar el botón
    } else {
        document.getElementById('cerrar-sesion').style.display = 'none'; // Ocultar el botón
    }
}

function cerrarSesion() {
    // Eliminar el marcador de sesión activa del localStorage
    localStorage.removeItem('usuarioIniciado');
    
    // Actualizar el estado del botón de cerrar sesión (ocultarlo)
    document.getElementById('cerrar-sesion').style.display = 'none';
    
    // Si es necesario, puedes actualizar el UI o mostrar un mensaje
    alert('Sesión cerrada exitosamente.');
}