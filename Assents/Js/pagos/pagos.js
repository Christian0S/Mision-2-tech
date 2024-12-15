// Función para mostrar el carrito en el contenedor correspondiente
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carritoContainer');
    carritoContainer.innerHTML = '';

    // Filtrar los productos seleccionados para el pago
    const productosSeleccionados = carrito.filter(producto => producto.seleccionado);

    if (productosSeleccionados.length === 0) {
        carritoContainer.innerHTML = '<p>No has seleccionado productos para pagar.</p>';
    } else {
        productosSeleccionados.forEach(producto => {
            const item = document.createElement('div');
            item.textContent = `Producto: ${producto.nombre} - Cantidad: ${producto.cantidad}`;
            carritoContainer.appendChild(item);
        });
    }
} 

// Función para seleccionar o deseleccionar un producto para el pago
function seleccionarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const checkbox = document.getElementById(`seleccionar-${id}`);

    carrito.forEach(producto => {
        if (producto.id === id) {
            producto.seleccionado = checkbox.checked;  // Actualiza el estado de "seleccionado"
        }
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));  // Actualizar carrito en localStorage

    // Volver a mostrar el carrito con solo los productos seleccionados
    mostrarCarrito();
}

// Función para proceder al pago (mostrar modal de pago)
function procederAlPago() {
    document.getElementById('modalPago').style.display = 'block';
}

// Función para mostrar el formulario correspondiente al método de pago seleccionado
function mostrarFormularioPago() {
    const metodoPago = document.getElementById('metodoPago').value;
    const formularios = ['formularioPSE', 'formularioNequi', 'formularioTarjeta'];

    // Ocultar todos los formularios
    formularios.forEach(formulario => {
        document.getElementById(formulario).style.display = 'none';
    });

    // Mostrar el formulario correspondiente al método de pago seleccionado
    if (metodoPago) {
        const formularioSeleccionado = `formulario${metodoPago}`;
        const formulario = document.getElementById(formularioSeleccionado);
        if (formulario) formulario.style.display = 'block';
    }
}

// Función para validar los datos del pago
function validarPago() {
    const metodoPago = document.getElementById('metodoPago').value;
    let valid = true; // Bandera para determinar si el pago es válido

    // Validar si se seleccionó un método de pago
    if (!metodoPago) {
        alert("Por favor, selecciona un método de pago.");
        valid = false;
    } else {
        // Si se seleccionó un método, validamos los datos correspondientes
        if (metodoPago === 'PSE') {
            const pseCuenta = document.getElementById('pseCuenta').value.trim();
            if (!/^\d+$/.test(pseCuenta)) {
                alert("El número de cuenta PSE no es válido. Debe contener solo números.");
                valid = false;
            }
        } else if (metodoPago === 'Nequi') {
            const nequiNumero = document.getElementById('nequiNumero').value.trim();
            if (!/^\d{10}$/.test(nequiNumero)) {
                alert("El número de celular Nequi no es válido. Debe tener exactamente 10 dígitos.");
                valid = false;
            }
        } else if (metodoPago === 'Tarjeta') {
            const tarjetaNumero = document.getElementById('tarjetaNumero').value.trim();
            const tarjetaFecha = document.getElementById('tarjetaFecha').value.trim();
            const tarjetaCVV = document.getElementById('tarjetaCVV').value.trim();

            if (!/^\d{16}$/.test(tarjetaNumero)) {
                alert("El número de tarjeta debe tener 16 dígitos.");
                valid = false;
            }
            if (!/^\d{2}\/\d{2}$/.test(tarjetaFecha)) {
                alert("La fecha de vencimiento debe tener el formato MM/AA.");
                valid = false;
            }
            if (!/^\d{3}$/.test(tarjetaCVV)) {
                alert("El código CVV debe tener 3 dígitos.");
                valid = false;
            }
        }
    }

    // Si la validación es exitosa, procesar el pago
    if (valid) {
        alert("Pago procesado con éxito.");
        document.getElementById('modalPago').style.display = 'none';

        // Obtener el carrito y eliminar solo los productos seleccionados
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito = carrito.filter(producto => !producto.seleccionado); // Eliminar solo los productos seleccionados
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar el carrito

        // Volver a mostrar el carrito con los productos restantes
        mostrarCarrito();

        // Redirigir al inicio
        console.log("Redirigiendo a /index.html");
        window.location.assign("/index.html");
    }
}

// Función para deseleccionar los productos seleccionados cuando se navega atrás o se abandona la página
function deseleccionarProductos() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Desmarcar todos los productos seleccionados
    carrito.forEach(producto => {
        if (producto.seleccionado) {
            producto.seleccionado = false;  // Desmarcar el producto
        }
    });

    // Actualizar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Volver a mostrar el carrito con los productos restantes
    mostrarCarrito();
}

// Detectar cuando el usuario navega hacia atrás o abandona la página
window.onbeforeunload = function(event) {
    // Llamamos a la función para deseleccionar productos
    deseleccionarProductos();
};

// Llamar a mostrarCarrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);
