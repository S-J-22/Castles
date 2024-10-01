let cart = [];
let totalAmount = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalAmount += price;
    updateCart();

    // Add a simple animation effect when an item is added
    const cartItems = document.getElementById('cart-items');
    cartItems.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
        cartItems.style.animation = ''; // Reset the animation after it completes
    }, 500);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-amount');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = `${item.productName} - $${item.price}`;
        cartItems.appendChild(itemElement);
    });

    totalElement.innerText = totalAmount;
}

function checkout() {
    alert(`Checkout - Total: $${totalAmount}`);
    cart = [];
    totalAmount = 0;
    updateCart();
}
