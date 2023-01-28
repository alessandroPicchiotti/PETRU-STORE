import { getElement } from "./utils.js";

const btnNavToggle = getElement(".nav-toggle");

const NavLink = getElement(".nav-links");

btnNavToggle.addEventListener("click",function (e){
    //console.log(e.currentTarget);
    NavLink.classList.toggle("show-links");
})
