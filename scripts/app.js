import { CustomCursor } from "./logic/customCursor.js"
import { HamburgerMenu } from "./logic/hamburgerMenu.js"

export class App {
    constructor() {
        this.init()
    }

    init = () => {
        this.customCursor = new CustomCursor()
        this.HamburgerMenu = new HamburgerMenu()
    }
}