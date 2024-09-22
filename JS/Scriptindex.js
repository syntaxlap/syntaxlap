const mobileNavLogo = document.getElementById("mobileNavLogo");
const exitnav = document.querySelector(".exitnav");
const nav_mobile = document.querySelector(".nav-mobile");
const home = document.querySelector(".home");
const about_container = document.querySelector(".about-container");
const readmore = document.getElementById("ReadMore")
const readless = document.getElementById("ReadLess")
mobileNavLogo.addEventListener("click", () => {
    nav_mobile.style.display = "block";
    mobileNavLogo.style.display = "none";
    home.style.filter = "blur(15px)"
})
exitnav.addEventListener("click", () => {
    nav_mobile.style.display = "none";
    mobileNavLogo.style.display = "block";
    home.style.filter = "blur(0px)"
})
readmore.addEventListener("click", () => {
    about_container.style.overflow = "visible";
    about_container.style.height = "auto";
    readmore.style.display = "none"
    readless.style.display = "block"
})
readless.addEventListener("click", () => {
    about_container.style.overflow = "hidden";
    about_container.style.height = "300px";
    readless.style.display = "none"
    readmore.style.display = "block"
})