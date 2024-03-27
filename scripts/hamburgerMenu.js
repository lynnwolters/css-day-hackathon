const openMenu = document.querySelector("nav > button")
const closeMenu = document.querySelector("nav > ul button")

openMenu.addEventListener("click", toggleMenu)
closeMenu.addEventListener("click", toggleMenu)

function toggleMenu() {
    let nav = document.querySelector("nav > ul")
    nav.classList.toggle("toggle-menu-css")
}