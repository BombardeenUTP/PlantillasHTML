const iconButton = document.getElementById('icon'),
modal=document.getElementById('modal'),
backgroundModal=document.getElementById('backgroundModal'),
cart=document.getElementById('cart'),
contaCarrito=document.getElementById('contaCarrito');

iconButton.addEventListener('click', (e) => {
    backgroundModal.classList.toggle('show');
    modal.classList.toggle('show');
})

// Evitar propagación de eventos en cart (hijo)
cart.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al backgroundModal
});

backgroundModal.addEventListener('click', (e) => {
    backgroundModal.classList.toggle('show');
    modal.classList.toggle('show');
});

// Evitar propagación de eventos en contaCarrito (hijo del hijo)
contaCarrito.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al backgroundModal
});
