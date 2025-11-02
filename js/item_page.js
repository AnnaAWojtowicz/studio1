const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

const item = items.find(i => i.id === itemId);

if (item) {

    const title = document.getElementById("item_title");
    title.textContent = item.name;

    const imgContainer = document.getElementById("item_image");
    imgContainer.src = item.img;
    imgContainer.alt = item.alt;
    imgContainer.className = item.className;

    const desc = document.getElementById("item_text");
    desc.textContent = item.description;

    const price = document.getElementById("item_price");
    price.textContent = `$${item.price}`;
}