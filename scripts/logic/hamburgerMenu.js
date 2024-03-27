export class HamburgerMenu {
    constructor() {
        this.menu = document.querySelector("nav > ul")
        if (!this.menu) {
            return false
        }
        this.openMenu = document.querySelector("nav > button")
        this.closeMenu = document.querySelector("nav > ul button")
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.openMenu.addEventListener("click", this.toggleMenu)
        this.closeMenu.addEventListener("click", this.toggleMenu)
    }

    toggleMenu = () => {
        this.menu.classList.toggle("toggle-menu")
    }     
}