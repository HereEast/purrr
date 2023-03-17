import "../styles/index.scss";

const image = document.querySelector(".product__image img");
const productContainer = document.querySelector(".product");


window.addEventListener("load", (e) => {
    setProductLayout();
})

window.addEventListener("resize", (e) => {
    setProductLayout();
})


// PRODUCT LAYOUT
function setProductLayout() {
    if (window.innerWidth === image.clientWidth) {
        productContainer.classList.add("product__layout--column");
    } else {
        productContainer.classList.remove("product__layout--column");
    }
}

