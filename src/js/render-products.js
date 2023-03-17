import { products } from "./products.js";

//  Render products
export function renderProducts() {    
    const cards = document.querySelector(".cards");

    products.forEach(product => {
        const productCard = createProduct(product);
        cards.append(productCard);
    });
}

// Create product
function createProduct(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("card");

    const productLink = document.createElement("a");
    productLink.classList.add("card--link");
    productLink.href = `./pages/${product.page}`;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card--image");

    const image = document.createElement("img");
    image.src = `./products/${product.image}`;
    image.alt = product.alt;
    image.title = product.alt || "";
    image.loading = "lazy";

    imageContainer.append(image);
    productLink.append(imageContainer);
    productCard.append(productLink);

    return productCard;
}