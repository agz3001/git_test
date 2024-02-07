// drag tab
const tabBox = document.querySelector(".tab-box")
const allTab = tabBox.querySelectorAll(".tab")
const arrowIcons = document.querySelectorAll(".icon i")
let isDragging = false

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex"
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex"
}
allTab.forEach(v => {
    v.addEventListener("click", () => {
        const tabElements = document.querySelectorAll(".tab-box i")
        tabElements.forEach(elem => elem.classList.remove("active"))
        v.classList.add("active")
    })
})
arrowIcons.forEach(v => {
    v.addEventListener("click", () => {
        let scrollWidth = tabBox.scrollLeft += v.id === "left" ? -340 : 340
        handleIcons(scrollWidth)
    })
})
const dragging = (e) => {
    if(!isDragging) return;
    tabBox.classList.add("dragging")
    tabBox.scrollLeft -= e.movementX
    handleIcons(tabBox.scrollLeft)
}
const dragStop = (e) => {
    tabBox.classList.remove("dragging")
    isDragging = false
}
tabBox.addEventListener("mousedown", () => isDragging = true)
tabBox.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)