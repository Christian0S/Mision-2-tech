function inicializarSlider() {
    document.querySelectorAll('.slider').forEach(slider => {
        const sliderContainer = slider.querySelector('.slider-container');
        const sliderItems = Array.from(sliderContainer.querySelectorAll('.producto-item'));
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        
        let currentIndex = 0;
        const itemsToShow = 3;  // Cambia a 1 o 2 si quieres mostrar menos productos
        const totalItems = sliderItems.length;

        // Clonamos el primer conjunto de productos y lo agregamos al final
        sliderItems.forEach(item => {
            const clone = item.cloneNode(true);  // Clonamos el item
            sliderContainer.appendChild(clone);  // Lo agregamos al final
        });

        // Función para actualizar la posición del slider
        function updateSlider() {
            const width = sliderItems[0].offsetWidth + 20;  // Ancho de los items + margen
            sliderContainer.style.transform = `translateX(-${currentIndex * width}px)`;
        }

        // Acción cuando se presiona el botón "next" (Siguiente)
        nextButton.addEventListener('click', () => {
            if (currentIndex < totalItems) {
                currentIndex++;
                updateSlider();
            } else {
                // Cuando llegamos al final, regresamos a la primera imagen sin salto
                sliderContainer.style.transition = 'none';  // Desactivamos la transición
                currentIndex = 0;  // Volvemos al primer conjunto
                updateSlider();

                // Rehabilitamos la transición después de un breve retraso para un ciclo continuo
                setTimeout(() => {
                    sliderContainer.style.transition = 'transform 0.3s ease';  // Rehabilitamos la transición
                }, 50);
            }
        });

        // Acción cuando se presiona el botón "prev" (Anterior)
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            } else {
                // Cuando llegamos al inicio, vamos al último conjunto de productos sin salto
                sliderContainer.style.transition = 'none';  // Desactivamos la transición
                currentIndex = totalItems - itemsToShow;  // Volvemos al último conjunto
                updateSlider();

                // Rehabilitamos la transición después de un breve retraso para un ciclo continuo
                setTimeout(() => {
                    sliderContainer.style.transition = 'transform 0.3s ease';  // Rehabilitamos la transición
                }, 50);
            }
        });

        // Inicializamos el slider
        updateSlider();
    });
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevenir el envío convencional del formulario
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar el correo electrónico con expresión regular
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        showNotification("Por favor ingrese un correo electrónico válido.", "error");
        return;
    }

    // Validar el teléfono (opcional) con expresión regular
    const phoneRegex = /^[0-9]{10}$/; // Permite solo números con 10 dígitos
    if (telefono && !phoneRegex.test(telefono)) {
        showNotification("Por favor ingrese un número de teléfono válido (10 dígitos).", "error");
        return;
    }

    // Validación del mensaje
    if (mensaje.length < 10) {
        showNotification("El mensaje debe tener al menos 10 caracteres.", "error");
        return;
    }

    // Si todo es válido, simular el envío y mostrar notificación de éxito
    showNotification("¡Gracias! Su mensaje ha sido enviado correctamente.", "success");

    // Limpiar el formulario
    document.getElementById("contact-form").reset();
});

// Función para mostrar la notificación
function showNotification(message, type) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.className = `notification ${type} show`; // Añadir la clase 'show' para hacer visible la notificación

    setTimeout(() => {
        notification.textContent = '';
        notification.className = 'notification'; // Eliminar las clases al ocultar
    }, 4000); // La notificación desaparecerá después de 4 segundos
}


// Llamamos las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(); // Muestra los productos
    inicializarSlider(); // Inicializa el slider
});

