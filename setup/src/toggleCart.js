import { getElement } from "./utils.js";


const modalcontainer = getElement(".modal-container");


const btnOpenModalMobile = getElement(".toggle-cart-mobile.open-modal-btn");
const btnOpenModal = getElement(".toggle-cart-desktop.open-modal-btn");
const btnClodeModal = getElement('.close-modal');
const modaloverlay = getElement(".modal-overlay");
const html = getElement("html");



export const openCart = () => {
    modalcontainer.classList.add("show-modal");
    modaloverlay.classList.add("show-modal");
    html.style.overflow = "hidden";

};

export const closeCart = () => {
    modalcontainer.classList.remove("show-modal");
    modaloverlay.classList.remove("show-modal");
    html.style.overflow = "visible";
};

btnOpenModal.addEventListener("click",function(){
    openCart();
})

btnOpenModalMobile.addEventListener("click",function(){
    openCart();
})

btnClodeModal.addEventListener("click",function(){
    closeCart();
})

modaloverlay.addEventListener("click",function(){
    closeCart();
})
