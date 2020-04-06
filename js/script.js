console.log('loaded!')


const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const display = document.getElementById('display')
const input = document.getElementById('input')
let clear = document.getElementById('clear')
let value = 0

//changes the color of the text if below 0
const colorEvent = () => {
    if (value < 0) {
    display.style.color = "red"
    } else if (value >= 0) {
        display.style.color = "#BC8FBD"
    }
}
//adds input value to the current value
const plusEvent = () => {
    const parse = parseInt(input.value)
    value = (value + parse)
    colorEvent()
    display.textContent = value
}

//subtracts input value from the current value
const minusEvent = () => {
    const parse = parseInt(input.value)
    value = (value - parse)
    colorEvent()
    display.textContent = value
}
//clears the display and resets value
const clearDisplay = () => {
    value = 0
    colorEvent()
    display.textContent = value
}

clear.addEventListener('click', clearDisplay)
plus.addEventListener('click', plusEvent)
minus.addEventListener('click', minusEvent)