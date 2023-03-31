import "../styles/index.scss";
import { productPage } from "./product-page";

let interval = null;

const dotsContainer = createDotsContainer();
const buttonFun = createToggleFunButton();

emitDots();

////////

window.addEventListener("click", deleteDots);
buttonFun.addEventListener("click", toggleFun);

////////

// EMIT
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
    return buttonToggleFun;
}

// CREATE DOTS CONTAINER
function createDotsContainer() {
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots__container");

    productPage.append(dotsContainer);
    return dotsContainer;
}