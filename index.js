import { App } from "./scripts/app.js" 

export let app = null 

function initApp() { 
    app = new App() 
}

document.addEventListener("DOMContentLoaded", () => { 
    initApp()
})