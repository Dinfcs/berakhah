// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBaseURL = 'https://wa.me/+573184818218'; // Reemplaza con tu número de teléfono

    document.querySelectorAll('.enlace-whatsapp').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            const producto = link.getAttribute('data-producto');
            const mensaje = encodeURIComponent(`Hola me gustaría adquirir ${producto}`);
            window.location.href = `${whatsappBaseURL}?text=${mensaje}`;
        });
    });
});
