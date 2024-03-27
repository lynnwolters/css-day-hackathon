export class CustomCursor {
    constructor() {
        this.customCursorElement = document.querySelector(".custom-cursor-element")
        if (!this.customCursorElement) {
            return false
        }
        this.cursorTriggerElement = document.querySelectorAll(".cursor-trigger-element")
        this.marqueeElement = document.querySelector(".marquee-wrapper")
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        document.addEventListener("mousemove", this.animateCursor)
        this.cursorTriggerElement.forEach(triggerElement => {
            triggerElement.addEventListener("mouseover", () => this.animateMouseOver())
            triggerElement.addEventListener("mouseout", () => this.animateMouseOut())
        })
    }

    animateCursor = ({clientX, clientY}) => {
        this.customCursorElement.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
    }  
    
    animateMouseOver() {
        this.customCursorElement.classList.add("animate-grow")
        this.customCursorElement.innerHTML = "Open"
        this.marqueeElement.style.display = "flex"
    }

    animateMouseOut() {
        this.customCursorElement.classList.remove("animate-grow")
        this.customCursorElement.innerHTML = ""
        this.marqueeElement.style.display = "none"
    }
}