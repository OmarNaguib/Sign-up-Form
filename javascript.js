let buttons= document.querySelectorAll("input[type=password]")

buttons.forEach((button) => {
    button.addEventListener("input",checkSymmetry)
})

function checkSymmetry() {
    if (buttons[0].value === buttons[1].value) removeClass()
    else addClass()
}

function removeClass() {
    buttons.forEach(button => button.classList.remove("error"))
}

function addClass() {
    buttons.forEach(button => button.classList.add("error"))
}