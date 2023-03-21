import "../styles/index.scss";
import gsap from "gsap";

const image = document.querySelector(".product__image img");
const productContainer = document.querySelector(".product");
const productPage = document.querySelector(".product__page");

let interval = null;

setProductLayout();
emitDots();
createToggleFunButton();


const dotsContainer = document.querySelector(".dots__container");
const buttonFun = document.querySelector(".button__fun");

//////////
//////////

window.addEventListener("resize", setProductLayout);
window.addEventListener("click", deleteDots);
buttonFun.addEventListener("click", toggleFun);


//////////
// DOTS //
//////////

function emitDots() {
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots__container");

    interval = setInterval(addDot, 1000);
    productPage.append(dotsContainer);
}

// TOGGLE FUN
function toggleFun(e) {
    if(interval === null) {
        interval = setInterval(addDot, 1000);
        e.target.textContent = "Fun Off";
    } else {
        clearInterval(interval);
        interval = null;
        e.target.textContent = "Fun On";
    }
}

// ADD DOT
function addDot() {
    const dot = createDot();
    dotsContainer.append(dot);
}

// CREATE DOT
function createDot() {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    const x = Math.trunc(Math.random() * 100);
    const y = Math.trunc(Math.random() * 100);

    dot.style.top = x + "%";
    dot.style.left = y + "%";

    return dot;
}

// DELETE DOTS
function deleteDots(e) {
    if (dotsContainer && e.target.tagName !== "BUTTON") {
        dotsContainer.innerHTML = "";
    } else return;
}

// CREATE ON-OFF BUTTON
function createToggleFunButton() {
    const buttonToggleFun = document.createElement("button");
    buttonToggleFun.classList.add("button--small", "button__fun");
    buttonToggleFun.textContent = "Fun Off";
    productPage.append(buttonToggleFun);
}

////////////////////
// PRODUCT LAYOUT //
////////////////////

function setProductLayout() {
    if (window.innerWidth === image.clientWidth) {
        productContainer.classList.add("product__layout--column");
    } else {
        productContainer.classList.remove("product__layout--column");
    }
}
