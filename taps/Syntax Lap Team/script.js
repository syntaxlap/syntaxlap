const mobileNavLogo = document.querySelector(".mobileNavLogo");
const mobileNav = document.querySelector(".nav-mobile");
const exitnav = document.querySelector(".exitnav");
mobileNavLogo.addEventListener("click", () => {
    mobileNav.style.display = "block";
    mobileNavLogo.style.display = "none";
})
exitnav.addEventListener("click", () => {
    mobileNav.style.display = "none";
    mobileNavLogo.style.display = "block";
})