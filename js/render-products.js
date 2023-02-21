import { products } from "./products.js";

export function renderProducts() {
    const productsContainer = document.querySelector(".products");
    
    products.forEach(product => {
        const productElement = `
            <div class="product">
                <div class="product__content">
                    <div class="product__info">
                        <span class="product__info--brand">${product.brand}</span>
                        <span class="product__info--descr">${product.descr}</span>
                        <a class="product__info--link" href="${product.link}" target="_blank">
                            <span>${product.shop}</span>
                        </a>
                    </div>
                    <div class="product__image" style="background-image:url(${product.image})"></div>
                </div>
            </div>`;

        productsContainer.insertAdjacentHTML("beforeend", productElement);
    })
}