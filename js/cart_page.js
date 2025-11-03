const cartItemsContainer = document.getElementById("cart_items");
const cartTotal = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
    total += item.price;

    const itemElement = document.createElement("div");
    itemElement.className = "cart_item";

    itemElement.innerHTML = `
        <div class="circle_container">
            <img src="${item.img}" alt="${item.alt}" class="body_part" id="${item.id}"/>
        </div>
        <div class="price">$${item.price}</div>
    `;

    cartItemsContainer.appendChild(itemElement);
});

cartTotal.textContent = `Total: $${total}`;