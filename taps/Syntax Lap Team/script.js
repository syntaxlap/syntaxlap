const mobileNavLogo = document.querySelector(".mobileNavLogo");
const mobileNav = document.querySelector(".nav-mobile");
const exitnav = document.querySelector(".exitnav");
const home = document.querySelector(".home");
mobileNavLogo.addEventListener("click", () => {
    mobileNav.style.display = "block";
    mobileNavLogo.style.display = "none";
    home.style.filter = "blur(15px)";
})
exitnav.addEventListener("click", () => {
    mobileNav.style.display = "none";
    mobileNavLogo.style.display = "block";
    home.style.filter = "blur(0px)"
})