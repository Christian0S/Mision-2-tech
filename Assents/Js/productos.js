// Productos de catálogo y promociones
const productos = [
    { id: 1, nombre: 'Portátil Inspiron 3520 de 38,1 cm (15") (Intel) - Dell', imagen: '/Assents/img/Laptop Dell Inspiron 15/1.avif', descripcion: 'Portátil de 15.6" Full HD con procesador Intel i5 y 8GB de RAM', precio: 2200000, categoria: 'promociones', enlace: 'https://www.dell.com/es-es/shop/portátiles-inspiron/inspiron-3520-portátil-de-381-cm-15-intel/spd/inspiron-15-3520-laptop' },
    { id: 2, nombre: 'Desktop Mini HP EliteDesk 800 G4 - HP', imagen: '/Assents/img/Computadora HP EliteDesk 800/1.png', descripcion: 'PC compacta con procesador Intel Core i7, 16GB de RAM y 1TB de HDD', precio: 1800000, categoria: 'destacados', enlace: 'https://www.hp.com/co-es/shop/product.aspx?id=5US62EC&opt=ABE&sel=DEF' },
    { id: 3, nombre: 'Ratón compacto inalámbrico Logitech M185', imagen: '/Assents/img/Mouse Logitech M185/1.jpeg', descripcion: 'Mouse inalámbrico compacto, ideal para portátiles, en color negro', precio: 35000, categoria: 'ninguno', enlace: 'https://www.logitech.com/es-es/product/m185-wireless-mouse' },
    { id: 4, nombre: 'Teclado mecánico Razer BlackWidow V3', imagen: '/Assents/img/Teclado mecánico Razer/1.jpeg', descripcion: 'Teclado mecánico RGB con switches mecánicos, ideal para gaming', precio: 450000, categoria: 'promociones', enlace: 'https://www.razer.com/es-es/gaming-keyboards/razer-blackwidow-v3' },
    { id: 5, nombre: 'Monitor LED de 24" Samsung', imagen: '/Assents/img/Monitor Samsung 24/1.avif', descripcion: 'Monitor Full HD con panel IPS, 75Hz, diseño sin bordes', precio: 750000, categoria: 'destacados', enlace: 'https://www.samsung.com/co/monitores/monitores-led-de-24-pulgadas/' },
    { id: 6, nombre: 'Portátil gaming Acer Predator Helios 16', imagen: '/Assents/img/Laptop Acer Predator Helios/1.webp', descripcion: 'Portátil de 16" con procesador Intel Core i7, 16GB de RAM y GTX 1660', precio: 5000000, categoria: 'destacados', enlace: 'https://www.acer.com/es-es/laptops/predator/predator-helios-16' },
    { id: 7, nombre: 'Mochila para laptop hombre Samsonite Acceleration Hammer 17"', imagen: '/Assents/img/Mochila para laptop Samsonite/1.jpeg', descripcion: 'Mochila robusta para laptops de hasta 17", ideal para viajes', precio: 160000, categoria: 'ninguno', enlace: 'https://www.houseofsamsonite.com.co/mochila-para-laptop-hombre-acceleration-hammer-negra-17' },
    { id: 8, nombre: 'SSD NVMe Kingston NV2 240GB', imagen: '/Assents/img/SSD Kingston 240GB/1.jpeg', descripcion: 'Almacenamiento rápido NVMe para mejorar el rendimiento de tu PC', precio: 150000, categoria: 'promociones', enlace: 'https://www.kingston.com/es/memory/search?partid=SNVS/240G' },
    { id: 9, nombre: 'Portátil Lenovo ThinkPad X1 Carbon Gen 11', imagen: '/Assents/img/Laptop Lenovo ThinkPad X1/1.jpeg', descripcion: 'Portátil ultradelgada de 14" con procesador Intel i5, 8GB de RAM', precio: 3000000, categoria: 'destacados', enlace: 'https://www.lenovo.com/co/es/laptops/thinkpad/thinkpad-x/ThinkPad-X1-Carbon-Gen-11-Intel/p/20U3003JUS' },
    { id: 10, nombre: 'Auriculares Logitech PRO X Wireless', imagen: '/Assents/img/Auriculares Logitech G Pro/1.jpeg', descripcion: 'Auriculares gaming con micrófono integrado y cancelación de ruido', precio: 380000, categoria: 'ninguno', enlace: 'https://www.logitech.com/es-es/product/pro-g-x-wireless' },
    { id: 11, nombre: 'Galaxy Tab S7 - Samsung', imagen: '/Assents/img/Tablet Samsung Galaxy Tab S7/1.png', descripcion: 'Tablet de 10.5" con 64GB de almacenamiento y Android', precio: 1200000, categoria: 'promociones', enlace: 'https://www.samsung.com/es/tablets/galaxy-tab-s7/' },
    { id: 12, nombre: 'PC Gamer Corsair Vengeance i7400', imagen: '/Assents/img/PC Gamer Corsair Vengeance/1.jpeg', descripcion: 'PC de gaming con procesador Intel i9, 32GB de RAM y tarjeta gráfica RTX 3080', precio: 9000000, categoria: 'destacados', enlace: 'https://www.corsair.com/es-es/vengeance-i7400-gaming-pc' },
    { id: 13, nombre: 'Cámara web Logitech C920 HD Pro', imagen: '/Assents/img/Cámara web Logitech C920/1.jpg', descripcion: 'Cámara web Full HD con micrófono estéreo integrado', precio: 250000, categoria: 'promociones', enlace: 'https://www.logitech.com/es-es/product/c920-hd-pro-webcam' },
    { id: 14, nombre: 'Microfono USB Blue Yeti', imagen: '/Assents/img/Microphone Blue Yeti/1.png', descripcion: 'Micrófono premium con Blue VO!CE, multipatrón, ideal para streaming', precio: 650000, categoria: 'ninguno', enlace: 'https://www.logitechg.com/es-es/products/microphones/blue-yeti-microphone.html' },
    { id: 15, nombre: 'Regulador de voltaje APC 600VA', imagen: '/Assents/img/Estabilizador APC 600VA/1.jpeg', descripcion: 'Estabilizador de energía con protección contra sobrecargas', precio: 150000, categoria: 'ninguno', enlace: 'https://www.apc.com/shop/co/es/products/APC-Back-UPS-600VA-230V/P-BE600M1' },
    { id: 16, nombre: 'Router TP-Link Archer A7', imagen: '/Assents/img/Router TP-Link Archer A7/1.jpg', descripcion: 'Router Wi-Fi AC1750 con doble banda y puertos Gigabit', precio: 250000, categoria: 'destacados', enlace: 'https://www.tp-link.com/es-es/home-networking/wifi-router/archer-a7/' },
    { id: 17, nombre: 'Pantalla táctil Acer UT241Y', imagen: '/Assents/img/Pantalla táctil Acer Aopen/1.jpg', descripcion: 'Pantalla táctil de 19" compatible con Windows', precio: 450000, categoria: 'ninguno', enlace: 'https://www.acer.com/es-es/monitors/touch/acer-ut241y' },
    { id: 18, nombre: 'Procesador AMD Ryzen 5 5600X', imagen: '/Assents/img/CPU AMD Ryzen 5/1.jpeg', descripcion: 'Procesador de 6 núcleos y 3.6GHz para PCs de escritorio', precio: 900000, categoria: 'promociones', enlace: 'https://www.amd.com/es/products/cpu/amd-ryzen-5-5600x' },
    { id: 19, nombre: 'Tarjeta gráfica ASUS ROG Strix GeForce RTX 3060', imagen: '/Assents/img/asus rog strix nvidia geforce rtx 3060/1.jpeg', descripcion: 'Tarjeta gráfica con 12GB GDDR6 para gaming de alto rendimiento', precio: 3500000, categoria: 'destacados', enlace: 'https://www.asus.com/es/Graphics-Cards/ROG-Strix/ROG-Strix-RTX3060/' },
    { id: 20, nombre: 'Smartwatch Samsung Galaxy Watch 4', imagen: '/Assents/img/Smartwatch Samsung Galaxy Watch 4/1.webp', descripcion: 'Smartwatch con pantalla AMOLED, ideal para seguimiento de actividad física', precio: 1200000, categoria: 'ninguno', enlace: 'https://www.samsung.com/latin_en/wearables/galaxy-watch4/' }
];



function mostrarProductos() {
    const promocionesDiv = document.getElementById('promociones');
    const destacadosDiv = document.getElementById('destacados');

    // Limpiar los contenedores antes de agregar productos
    promocionesDiv.innerHTML = '';
    destacadosDiv.innerHTML = '';

    // Filtrar productos por categoría
    const productosPromociones = productos.filter(producto => producto.categoria === 'promociones');
    const productosDestacados = productos.filter(producto => producto.categoria === 'destacados');

    // Mostrar productos de promociones
    productosPromociones.forEach(producto => {
        const productoItem = document.createElement('div');
        productoItem.classList.add('producto-item');
        productoItem.innerHTML = `
            <a style = " text-decoration: none;
    color: #333; href="${producto.enlace}" target="_blank">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>s${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>$${producto.precio.toLocaleString()}</p>
            </a>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        promocionesDiv.appendChild(productoItem);
    });

    // Mostrar productos de destacados
    productosDestacados.forEach(producto => {
        const productoItem = document.createElement('div');
        productoItem.classList.add('producto-item');
        productoItem.innerHTML = `
            <a style = " text-decoration: none;
    color: #333; href="${producto.enlace}" target="_blank">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>$${producto.precio.toLocaleString()}</p>s
            </a>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        destacadosDiv.appendChild(productoItem);
    });
}

function filtrarProductos() {
    // Obtener los valores de los checkboxes
    const filtroPromociones = document.getElementById('filtro-promociones').checked;
    const filtroDestacados = document.getElementById('filtro-destacados').checked;
    const filtroSinCategoria = document.getElementById('filtro-sin-categoria').checked;
    const filtroTodos = document.getElementById('filtro-todos').checked;

    // Si alguno de los filtros está seleccionado, desmarcar "Mostrar Todos"
    if (filtroPromociones || filtroDestacados || filtroSinCategoria) {
        document.getElementById('filtro-todos').checked = false;
    }

    // Filtrar los productos según los criterios seleccionados
    let productosFiltrados = productos.filter(producto => {
        if (filtroTodos) return true; // Mostrar todos los productos si "Mostrar Todos" está seleccionado
        if (filtroPromociones && producto.categoria === 'promociones') return true;
        if (filtroDestacados && producto.categoria === 'destacados') return true;
        if (filtroSinCategoria && producto.categoria === 'ninguno') return true;
        return false;
    });

    // Mostrar los productos filtrados en la página
    mostrarProductosCatalogo(productosFiltrados);
}

// Función para mostrar los productos en la página
function mostrarProductosCatalogo(productos) {
    const listaProductos = document.getElementById('producto-lista');
    listaProductos.innerHTML = ''; // Limpiar los productos anteriores

    // Si no hay productos filtrados, mostrar un mensaje
    if (productos.length === 0) {
        listaProductos.innerHTML = '<p>No se encontraron productos</p>';
    } else {
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-item');
            productoDiv.innerHTML = `
                <a  style = " text-decoration: none;
    color: #333;"href="${producto.enlace}" target="_blank">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p><strong>Precio:</strong> $${producto.precio.toLocaleString()}</p>
                </a>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            listaProductos.appendChild(productoDiv);
        });
    }
}


// Función para mostrar los productos en la página
function mostrarProductosCatalogo(productos) {
    const listaProductos = document.getElementById('producto-lista');
    listaProductos.innerHTML = ''; // Limpiar los productos anteriores

    // Si no hay productos filtrados, mostrar un mensaje
    if (productos.length === 0) {
        listaProductos.innerHTML = '<p>No se encontraron productos</p>';
    } else {
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-item');
            productoDiv.innerHTML = `
                <a href="${producto.enlace}" target="_blank">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p><strong>Precio:</strong> $${producto.precio.toLocaleString()}</p>
                </a>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            listaProductos.appendChild(productoDiv);
        });
    }
}


// Función para garantizar que "Mostrar Todos" esté marcado si no hay filtros seleccionados
function verificarMostrarTodos() {
    const filtroPromociones = document.getElementById('filtro-promociones').checked;
    const filtroDestacados = document.getElementById('filtro-destacados').checked;
    const filtroSinCategoria = document.getElementById('filtro-sin-categoria').checked;

    // Si no hay ningún filtro seleccionado, marcar "Mostrar Todos"
    if (!filtroPromociones && !filtroDestacados && !filtroSinCategoria) {
        document.getElementById('filtro-todos').checked = true;
        filtrarProductos();
    }
}

// Llamar a la función de filtro para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    filtrarProductos(); // Mostrar todos los productos al inicio
});

// Agregar listeners a los checkboxes para verificar y actualizar el estado de "Mostrar Todos"
document.getElementById('filtro-promociones').addEventListener('change', () => {
    filtrarProductos();
    verificarMostrarTodos();
});

document.getElementById('filtro-destacados').addEventListener('change', () => {
    filtrarProductos();
    verificarMostrarTodos();
});

document.getElementById('filtro-sin-categoria').addEventListener('change', () => {
    filtrarProductos();
    verificarMostrarTodos();
});

document.getElementById('filtro-todos').addEventListener('change', () => {
    if (document.getElementById('filtro-todos').checked) {
        // Desmarcar otros filtros si se selecciona "Mostrar Todos"
        document.getElementById('filtro-promociones').checked = false;
        document.getElementById('filtro-destacados').checked = false;
        document.getElementById('filtro-sin-categoria').checked = false;
    }
    filtrarProductos();
});


// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    // Obtener el carrito del localStorage, o crear uno vacío si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.id === id);

    if (productoExistente) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        const producto = productos.find(producto => producto.id === id);
        carrito.push({ ...producto, cantidad: 1 });
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log(`Producto ${id} agregado al carrito`);
}

