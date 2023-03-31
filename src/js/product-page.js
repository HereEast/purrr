import "../styles/index.scss";
import "./dots.js";

const image = document.querySelector(".product__image img");
const productContainer = document.querySelector(".product");
export const productPage = document.querySelector(".product__page");

////////

window.addEventListener("DOMContentLoaded", setProductLayout);
window.addEventListener("resize", setProductLayout);

////////

// PRODUCT LAYOUT
function setProductLayout() {
    if (window.innerWidth === image.clientWidth) {
        productContainer.classList.add("product__layout--column");
    } else {
        productContainer.classList.remove("product__layout--column");
    }
}
