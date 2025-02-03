// drag and drop
const sortableList = document.querySelector(".sortable-list")
const items = sortableList.querySelectorAll(".item")

items.forEach(v => {
    v.addEventListener("dragstart", () => {
        setTimeout(() => v.classList.add("dragging"))
    })
    v.addEventListener("dragend", () => v.classList.remove("dragging"))
})
const initSortableList = (e) => {
    e.preventDefault()
    const draggingItem = document.querySelector(".dragging")
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging")]
    let nextSibling = siblings.find(elem => {
        return e.clientY <= elem.offsetTop + elem.offsetHeight / 2
    })
    sortableList.insertBefore(draggingItem, nextSibling)
}
sortableList.addEventListener("dragover", initSortableList)
sortableList.addEventListener("dragenter", e => e.preventDefault())