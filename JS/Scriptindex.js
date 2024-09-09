const mobileNavLogo = document.getElementById("mobileNavLogo");
const exitnav = document.querySelector(".exitnav");
const nav_mobile = document.querySelector(".nav-mobile");
const home = document.querySelector(".home");
mobileNavLogo.addEventListener("click", () => {
    nav_mobile.style.display = "block";
    mobileNavLogo.style.display = "none";
    home.style.filter = "blur(10px)"
})
exitnav.addEventListener("click", () => {
    nav_mobile.style.display = "none";
    mobileNavLogo.style.display = "block";
    home.style.filter = "blur(0px)"
})