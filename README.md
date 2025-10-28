# Cápsula Store - Tienda de Ropa Online

## Descripción

Una interfaz moderna y elegante para una tienda de ropa online con integración directa a WhatsApp para facilitar la compra.

## Características

- ✨ Diseño limpio y moderno
- 🛍️ Galería de productos con 20 artículos
- 💚 Botones de WhatsApp con efecto hover
- 💰 Precios claramente visibles
- 📱 Diseño responsive (adaptable a móviles y tablets)
- 🎨 Gradientes coloridos y animaciones suaves
- 🔔 Tooltips informativos

## Estructura de Archivos

```
├── index.html      # Estructura HTML de la página
├── styles.css      # Estilos y diseño
├── script.js       # Funcionalidad JavaScript
└── README.md       # Este archivo
```

## Cómo Usar

1. Abre el archivo `index.html` en tu navegador web
2. Navega por la galería de productos
3. Haz hover sobre los botones de WhatsApp para ver el tooltip
4. Haz clic en cualquier botón verde para contactar por WhatsApp

## Personalización

### Cambiar el número de WhatsApp

En el archivo `index.html`, reemplaza el número `573001234567` en todos los enlaces de WhatsApp con tu número real.

### Cambiar las imágenes

Reemplaza los `<div class="product-image">` con imágenes reales:

```html
<img src="ruta-a-tu-imagen.jpg" alt="Nombre del producto">
```

O usa imágenes de servicios de placeholder como Unsplash:
```html
<img src="https://images.unsplash.com/photo-xxxxx" alt="Producto">
```

### Agregar más productos

Copia una de las tarjetas de producto existentes y modifica los datos:

```html
<div class="product-card">
    <div class="product-image" style="background: linear-gradient(...)"></div>
    <div class="product-info">
        <h3 class="product-name">Nombre del Producto</h3>
        <p class="product-price">$XX.XXX</p>
        <a href="https://wa.me/SU_NUMERO?text=..." class="whatsapp-btn" target="_blank" data-tooltip="Pedir por WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</div>
```

## Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animaciones)
- JavaScript (ES6)
- Font Awesome (iconos)

## Responsive Design

La página está optimizada para:
- 📱 Teléfonos móviles
- 📱 Tablets
- 💻 Computadoras de escritorio

## Personalización de Colores

Puedes modificar los colores en `styles.css`:

- **Banner**: Cambia el gradiente en `.banner` (línea ~18)
- **Productos**: Cambia los colores en `.product-price` (línea ~91)
- **WhatsApp**: Cambia el verde en `.whatsapp-btn` (línea ~101)

## Licencia

Libre de usar y modificar según tus necesidades.

