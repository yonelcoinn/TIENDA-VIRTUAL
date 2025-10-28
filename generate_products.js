// Generador de productos para las categorías
// Este archivo solo es auxiliar para generar el HTML

function generateProductHTML(name, price, index, category) {
    const gradients = [
        'linear-gradient(135deg, #4a4a4a 0%, #2d2d2d 100%)',
        'linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%)',
        'linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 100%)',
        'linear-gradient(135deg, #7a7a7a 0%, #5a5a5a 100%)',
        'linear-gradient(135deg, #6d6d6d 0%, #4d4d4d 100%)',
        'linear-gradient(135deg, #5c5c5c 0%, #3c3c3c 100%)'
    ];
    const gradient = gradients[index % gradients.length];
    
    return `
            <div class="product-card">
                <div class="product-image" style="background: ${gradient}"></div>
                <div class="product-info">
                    <h3 class="product-name">${name}</h3>
                    <p class="product-price">${price}</p>
                    <span class="whatsapp-tooltip" data-tooltip="Pedir por WhatsApp">
                        <a href="https://wa.me/573165847930?text=Hola!%20Estoy%20interesado%20en%20${encodeURIComponent(name)}" class="whatsapp-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </span>
                </div>
            </div>
    `;
}

// Productos Ropa Deportiva Dama
const productosDama = [
    { name: 'Leggins Deportivos Rojos', price: '$89.900' },
    { name: 'Top Deportivo Sin Mangas', price: '$79.900' },
    { name: 'Shorts Deportivos Rosa', price: '$69.900' },
    { name: 'Sudadera Deportiva Negra', price: '$129.900' },
    { name: 'Sujetador Deportivo', price: '$99.900' },
    { name: 'Camiseta Deportiva Gris', price: '$89.900' },
    { name: 'Pantalón Deportivo Negro', price: '$149.900' },
    { name: 'Chaqueta Deportiva Azul', price: '$179.900' },
    { name: 'Leggins Con Banda Lateral', price: '$94.900' },
    { name: 'Crop Top Deportivo', price: '$84.900' },
    { name: 'Falda Deportiva Negra', price: '$119.900' },
    { name: 'Top Deportivo Con Cuello Alto', price: '$109.900' },
    { name: 'Shorts Con Cintura Alta', price: '$79.900' },
    { name: 'Set Deportivo Coordinado', price: '$229.900' },
    { name: 'Leggins De Compresión', price: '$139.900' },
    { name: 'Sujetador Deportivo Deportivo', price: '$94.900' },
    { name: 'Chaleco Deportivo', price: '$89.900' },
    { name: 'Top Deportivo Con Espalda Abierta', price: '$99.900' },
    { name: 'Leggins Con Reflejante', price: '$124.900' },
    { name: 'Sudadera Oversized Deportiva', price: '$159.900' }
];

// Productos Ropa Deportiva Caballero
const productosCaballero = [
    { name: 'Pantalón Deportivo Negro', price: '$129.900' },
    { name: 'Camiseta Deportiva Blanca', price: '$79.900' },
    { name: 'Shorts Deportivos Negros', price: '$89.900' },
    { name: 'Sudadera Con Capucha', price: '$179.900' },
    { name: 'Chaqueta Deportiva Roja', price: '$199.900' },
    { name: 'Pantalón Deportivo Gris', price: '$139.900' },
    { name: 'Tank Top Deportivo', price: '$69.900' },
    { name: 'Short Deportivo Con Bolsillo', price: '$94.900' },
    { name: 'Sudadera Deportiva Negra', price: '$169.900' },
    { name: 'Camiseta Deportiva De Cuello Alto', price: '$89.900' },
    { name: 'Pantalón Deportivo Azul', price: '$149.900' },
    { name: 'Compresión Deportiva', price: '$119.900' },
    { name: 'Chaqueta Windbreaker', price: '$229.900' },
    { name: 'Sudadera Sin Capucha', price: '$159.900' },
    { name: 'Short Deportivo Con Cremallera', price: '$99.900' },
    { name: 'Camiseta Deportiva Rayada', price: '$84.900' },
    { name: 'Pantalón Deportivo Recto', price: '$139.900' },
    { name: 'Top Deportivo De Manga Corta', price: '$74.900' },
    { name: 'Chaqueta Deportiva Impermeable', price: '$249.900' },
    { name: 'Set Deportivo Completo', price: '$349.900' }
];

console.log('// PRODUCTOS DAMA');
productosDama.forEach((producto, index) => {
    console.log(generateProductHTML(producto.name, producto.price, index, 'dama'));
});

console.log('\n// PRODUCTOS CABALLERO');
productosCaballero.forEach((producto, index) => {
    console.log(generateProductHTML(producto.name, producto.price, index, 'caballero'));
});

