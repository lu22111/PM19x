const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "House", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3800 }
];

const productosFiltrados = productos.filter(producto => producto.precio > 1000);

const nombres = productosFiltrados.map(producto => producto.nombre);

console.log(nombres); // ["Laptop", "Monitor"]
