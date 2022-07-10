let container = document.querySelector(".container")

let button = document.querySelector("button")

button.addEventListener('click', () => {
    number = prompt("Enter a number not bigger than 100", 100)
    number = parseInt(number)
    if (isNaN(number)) {
        return alert("Not a number")
    }

    if (number > 100) {
        return alert("Bigger than 100")
    }

    container.replaceChildren()
    drawGrid(number)
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
})

function drawGrid(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            let grid_item = document.createElement("div")
            grid_item.classList.add("grid-item")
            grid_item.addEventListener('mouseover', (event) => {
                grid_item.style.backgroundColor = "black"
            })
            container.appendChild(grid_item)
        }
    }
}

drawGrid(16)