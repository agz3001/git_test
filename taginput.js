// tgainput
const tagContainer = document.querySelector(".tag-container")
const input = document.querySelector(".tag-container input")
let tags = []

const createTag = (word) => {
    const div = document.createElement("div")
    div.setAttribute("class", "tag")
    const span = document.createElement("span")
    span.innerHTML = word
    const closeBtn = document.createElement("i")
    closeBtn.setAttribute("class", "material-icons")
    closeBtn.setAttribute("data-item", word)
    closeBtn.innerHTML = "close"

    div.appendChild(span)
    div.appendChild(closeBtn)

    return div
}

const reset = () => {
    const tagElements = document.querySelectorAll(".tag")
    tagElements.forEach(v => v.remove())
}

const addTag = () => {
    reset()
    tags.slice().reverse().forEach(v => {
        const inputs = createTag(v)
        tagContainer.insertBefore(inputs, tagContainer.firstElementChild)
    })
}

input.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        tags.push(input.value)
        addTag()
        input.value = ""
    }
})

input.addEventListener("keydown", (event) => {
    if (event.code === "Backspace" && tags.length > 0 && input.value == "") {
        tags.splice(tags.length -1)
        addTag()
    }
})

document.addEventListener("click", (event) => {
    if (event.target.tagName === "I") {
        const value = event.target.getAttribute("data-item")
        const index = tags.indexOf(value)
        tags.splice(index, 1)
        addTag()
    }
})