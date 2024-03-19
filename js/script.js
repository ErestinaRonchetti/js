// Función para mostrar el NOMBRE del producto en la página
function mostrarNombreProducto(producto) {
    document.getElementById("nombre").innerText = producto.nombre;
}

// Función para mostrar el PRECIO del producto en la página
function mostrarPrecioProducto(producto) {
    document.getElementById("precio").innerText = "Precio: $" + producto.precio.toFixed(2);
}

// Función para COMPRAR el producto
function comprarProducto() {
    alert("¡Gracias por tu compra!");
}

// CLICKEAR el botón de comprar
document.getElementById("botonComprar").addEventListener("click", comprarProducto);

// Funciones para mostrar el producto cuando se carga la página
window.onload = function() {
    const producto = {
        nombre: "Producto Ejemplo",
        precio: 50.00
    };

    mostrarNombreProducto(producto);
    mostrarPrecioProducto(producto);


    /* Condicional para revisar si un producto está en oferta y 
    mostrar un mensaje especial cuando mi proyecto este avanzado  */
    if (producto.precio > 100) {
        console.log("Este producto es valioso");
    } else {
        console.log("Este producto es accesible");
    }

    /* Ejemplo de bucle FOR: por si un producto tiene varias imágenes 
    quizás como una galería de imágenes para que el usuario pueda desplazarse */
    for (let i = 0; i < 3; i++) {
        console.log("Iteración " + (i + 1));
    }
};document.getElementById("botonComprar").addEventListener("click", comprarProducto);



