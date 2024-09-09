const mobileNavLogo = document.getElementById("mobileNavLogo");
const exitnav = document.querySelector(".exitnav");
const nav_mobile = document.querySelector(".nav-mobile");
mobileNavLogo.addEventListener("click", () => {
    nav_mobile.style.display = "block";
    mobileNavLogo.style.display = "none";
})
exitnav.addEventListener("click", () => {
    nav_mobile.style.display = "none";
    mobileNavLogo.style.display = "block";
})