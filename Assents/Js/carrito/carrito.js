// Mostrar productos del carrito
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carritoDiv.innerHTML = '';  // Limpiar el carrito

    if (carrito.length === 0) {
        carritoDiv.innerHTML = '<p>El carrito está vacío</p>';
        document.getElementById('total-carrito').textContent = 'Total: $0.00';  // Mostrar total cero si está vacío
    } else {
        let total = 0;

        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('cart-item');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.nombre}</p>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
                <p>
                    Cantidad: 
                    <input type="number" value="${producto.cantidad}" min="1" id="cantidad-${producto.id}" onchange="actualizarCantidad(${producto.id})">
                </p>
                <p>Total: $${(producto.precio * producto.cantidad).toLocaleString()}</p>
                <p>
                    <label>
                        <input type="checkbox" id="seleccionar-${producto.id}" onclick="seleccionarProducto(${producto.id})"> Seleccionar para pagar
                    </label>
                </p>
                <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
            `;
            carritoDiv.appendChild(productoDiv);
            total += producto.precio * producto.cantidad;  // Sumar al total
        });

        // Mostrar el total del carrito
        document.getElementById('total-carrito').textContent = `Total: $${total.toLocaleString()}`;
    }
}

// Eliminar un producto del carrito
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id !== id);  // Eliminar el producto por su id
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Actualizar el carrito en localStorage

    // Volver a mostrar el carrito con el total actualizado
    mostrarCarrito();  // Asegurándonos de que se actualice el total
}

// Actualizar la cantidad de un producto
function actualizarCantidad(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevaCantidad = parseInt(document.getElementById(`cantidad-${id}`).value); // Obtener la nueva cantidad

    carrito.forEach(producto => {
        if (producto.id === id) {
            producto.cantidad = nuevaCantidad;
        }
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));  // Actualizar carrito en localStorage

    // Volver a mostrar el carrito con el total actualizado
    mostrarCarrito();  // Asegurándonos de que el total se actualice después de cambiar la cantidad
}

// Seleccionar o deseleccionar un producto para el pago
function seleccionarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const checkbox = document.getElementById(`seleccionar-${id}`);

    carrito.forEach(producto => {
        if (producto.id === id) {
            producto.seleccionado = checkbox.checked;  // Actualiza el estado de "seleccionado"
        }
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));  // Actualizar carrito en localStorage
}

// Proceder al pago con los productos seleccionados
function procederAlPago() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let productosSeleccionados = carrito.filter(producto => producto.seleccionado);
    
    if (productosSeleccionados.length === 0) {
        alert("Debes seleccionar al menos un producto para proceder con el pago.");
        return;
    }

    // Verifica si el usuario ha iniciado sesión
    if (!verificarSesion()) {
        alert("Debes iniciar sesión para proceder con el pago.");
        // Redirigir al usuario a una página de inicio de sesión
        window.location.href = "/htmls/login.html"; // Cambia por la ruta real de tu página de login
        return;
    } else {
        // Aquí puedes redirigir o procesar el pago con los productos seleccionados
        // Puedes pasarlos como un parámetro en la URL o guardarlos en localStorage/SessionStorage
        window.location.href = "/htmls/pagos.html";
    }
}

// Función para verificar si la sesión está iniciada
function verificarSesion() {
    // Simula la existencia de una sesión
    return localStorage.getItem('usuarioIniciado') === 'true';
}

// Simula el inicio de sesión (esto lo implementarías en un flujo real de login)
function iniciarSesion() {
    localStorage.setItem('usuarioIniciado', 'true');
    alert("Sesión iniciada correctamente.");
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuarioIniciado');
    alert("Sesión cerrada.");
}

// Llamar a la función para mostrar el carrito al cargar la página
mostrarCarrito();
