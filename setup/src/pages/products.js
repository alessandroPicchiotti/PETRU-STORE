// global imports
import "../toggleNavbar.js";
import "../toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCategory from "../filters/category.js";
import setupPrice from "../filters/price.js";

// specific imports
import { addToCart } from "../cart/setupCart.js";
import { store } from "../store.js";
import display from "../displayProducts.js";
import { getElement, formatPrice } from "../utils.js";



let divProucts = getElement(".products-container");
let loading = getElement(".page-loading");

let divProductImg = getElement(".product-img");
let divProductName = getElement(".product-name");
let divProductReting = getElement(".product-rating"); 
let divProductPrice = getElement(".product-price"); 
let divProductCategory = getElement(".product-category");  
let divProductDescription = getElement(".product-description");   
let divProductDidponibility = getElement(".product-disponibility");    
let btnCarrToAdd = getElement(".add-cart-btn");     
//console.log(btnCarrToAdd.value);

display(store,divProucts);
loading.style.display = "none";

let firstelement = store[4];
console.log( firstelement);
divProductImg.src = firstelement.image;
divProductName.textContent = firstelement.title;
divProductCategory.textContent= firstelement.category;
divProductPrice.textContent = formatPrice(firstelement.price);
divProductDescription.textContent = firstelement.description;


console.log("eccomi");
const showStars = ( element,nstar) =>{
    var quo = Math.floor(nstar);
    var rem = nstar%1;

    console.log(quo,rem);

    for (let i = 0; i < quo; i++) {
        element.innerHTML += `<span
        class="iconify star"
        data-icon="fa6-solid:star"></span>`
      }
      for (let i = 0; i < rem; i++) {
        element.innerHTML += `<span
        class="iconify star"
        data-icon="fa6-solid:star-half-stroke"
      ></span>`
      }      
};
const setCommenti = (element,numero) =>{
    element.innerHTML += `(${numero})`;
};

showStars(divProductReting,firstelement.rating.rate);
setCommenti(divProductReting,firstelement.rating.count)


