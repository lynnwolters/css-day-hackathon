export class CustomCursor {
    constructor() {
        this.customCursorElement = document.querySelector(".custom-cursor-element")
        if (!this.customCursorElement) {
            return false
        }
        this.cursorTriggerElement = document.querySelectorAll(".cursor-trigger-element")
        this.marqueeElement = document.querySelector(".marquee-wrapper")
        this.bodyElement = document.querySelectorAll("#lichaam")
        this.eyeGroups = document.querySelectorAll("#ogen > g")
        this.openMenu = document.querySelector("nav > button")
        this.closeMenu = document.querySelector("nav > ul button")
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        document.addEventListener("mousemove", this.animateCursor)

        this.cursorTriggerElement.forEach(triggerElement => {
            triggerElement.addEventListener("mouseover", () => this.animateMenuMouseOver())
            triggerElement.addEventListener("mouseout", () => this.animateMenuMouseOut())
        })

        this.bodyElement.forEach(body => {
            body.addEventListener("mouseover", () => this.animateBodyMouseOver(body))
            body.addEventListener("mouseout", () => this.animateBodyMouseOut(body))
        })

        // Voeg eventlisteners toe voor menu knoppen hover
        this.openMenu.addEventListener("mouseover", () => this.animateMenuHover())
        this.openMenu.addEventListener("mouseout", () => this.animateMenuMouseOut())

        this.closeMenu.addEventListener("mouseover", () => this.animateMenuHover())
        this.closeMenu.addEventListener("mouseout", () => this.animateMenuMouseOut())
    }

    animateCursor = ({clientX, clientY}) => {
        this.customCursorElement.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`

        const eyeShiftX = (clientX - window.innerWidth / 2) / 30
        const eyeShiftY = (clientY - window.innerHeight / 2) / 30

        this.eyeGroups.forEach(eyeGroup => {
            eyeGroup.setAttribute("transform", `translate(${eyeShiftX}, ${eyeShiftY})`)
        })
    }

    animateMenuMouseOver() {
        this.customCursorElement.classList.add("animate-grow")
        this.customCursorElement.innerHTML = "Open"

        this.marqueeElement.style.display = "block"
    }

    animateMenuHover() {
        this.customCursorElement.style.backgroundColor = "#FFFFFF"
        this.customCursorElement.style.color = "#000000"
    }

    animateMenuMouseOut() {
        this.customCursorElement.classList.remove("animate-grow")
        this.customCursorElement.innerHTML = ""

        this.marqueeElement.style.display = "block"

        this.customCursorElement.style.backgroundColor = "var(--black)"
        this.customCursorElement.style.color = "var(--white)"
    }

    animateBodyMouseOver(body) {
        this.bodyElement.forEach(otherBody => {
            if (otherBody !== body) {
                otherBody.style.fill = "#F2F2F2"
            }
        })
    }

    animateBodyMouseOut(body) {
        this.bodyElement.forEach(otherBody => {
            if (otherBody !== body) {
                otherBody.style.fill = ""
            }
        })
    }
}
