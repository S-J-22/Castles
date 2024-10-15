let cartCount = 0;

function updateCartCount(){
    const cartCountElement = document.getElementById('cart-count');

    cartCountElement.textContent = cartCount;

    if(cartCount > 0){
        cartCountElement.style.display = 'inline';
    }else{
        cartCountElement.style.display = 'none';
    }
}

function addToCart(){
    cartCount++;
    updateCartCount();
}

function removeFromCart(){
    if(cartCount > 0){
        cartCount--;
    }

    updateCartCount();
}

const hireButtons = document.querySelectorAll('.product button');
hireButtons.forEach(button=>{
    button.addEventListener('click', addToCart);
})

updateCartCount();

//Menu Functionality

const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

menuIcon.addEventListener('click',()=>{
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none': 'block';
});

document.addEventListener('click', (event)=>{
    if(!menuIcon.contains(event.target) && ! dropdownMenu.contains(event.target)){
        dropdownMenu.style.display = 'none';
    }
});