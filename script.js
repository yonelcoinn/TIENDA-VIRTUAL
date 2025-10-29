// Tooltip functionality enhancement
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a brief animation on click
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });

        // Keyboard accessibility
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(this.href, '_blank');
            }
        });
    });

    // Smooth scroll for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para cambiar imágenes en la galería
function changeImage(clickedImage) {
    const gallery = clickedImage.parentElement;
    const images = gallery.querySelectorAll('.product-image');
    
    // Remover clase active de todas las imágenes
    images.forEach(img => img.classList.remove('active'));
    
    // Agregar clase active a la imagen clickeada
    clickedImage.classList.add('active');
}

// Navegación por flechas en cualquier galería
function changeGalleryImage(buttonElement, direction) {
    const gallery = buttonElement.closest('.product-image-gallery');
    if (!gallery) return;

    const images = Array.from(gallery.querySelectorAll('.product-image'));
    if (images.length === 0) return;

    const currentIndex = images.findIndex(img => img.classList.contains('active'));
    const nextIndex = direction === 'prev'
        ? (currentIndex - 1 + images.length) % images.length
        : (currentIndex + 1) % images.length;

    images.forEach(img => img.classList.remove('active'));
    images[nextIndex].classList.add('active');
}

// Auto-rotación de imágenes en la galería del primer producto
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.product-image-gallery');
    if (gallery) {
        const images = gallery.querySelectorAll('.product-image');
        let currentIndex = 0;
        
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000); // Cambia cada 3 segundos
    }
});

// Función para cambiar de categoría
function showCategory(category) {
    // Ocultar todos los contenidos de categorías
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remover clase active de todos los botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar la categoría seleccionada
    const selectedCategory = document.getElementById(`categoria-${category}`);
    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }
    
    // Agregar clase active al botón seleccionado
    event.target.classList.add('active');
    
    // Scroll suave hacia la parte superior
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

