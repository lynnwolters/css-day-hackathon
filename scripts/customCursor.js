const customCursor = document.querySelector(".custom-cursor")
const cursorGrowElement = document.querySelectorAll(".cursor-grow-element")

document.addEventListener("mousemove", animateCursor)

function animateCursor({ clientX, clientY }) {
    customCursor.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
}

cursorGrowElement.forEach((grow) => {
    grow.addEventListener("mouseover", growCursor)
    grow.addEventListener("mouseout", shrinkCursor)
})

function growCursor() {
    customCursor.classList.add("grow-cursor")
    customCursor.innerHTML = "Open"
}

function shrinkCursor() {
    customCursor.classList.remove("grow-cursor")
    customCursor.innerHTML = ""
}
