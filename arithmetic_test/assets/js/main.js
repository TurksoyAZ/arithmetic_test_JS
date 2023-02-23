
let zahlFirst = document.getElementById('zahlFirst')
let zahlSecond = document.getElementById('zahlSecond')
// 
let operatorId = document.getElementById('operatorId')
// 
let inputText = document.getElementById('inputText')
// 
let btn = document.getElementById('btn')
// 
let outputTrue = document.getElementById('outputTrue')
let outputFalse = document.getElementById('outputFalse')


// Random
function randomRund(max, min) {
    let random = Math.floor(Math.random() * (min - max))
    return random
}

// Question
const question = () => {
    // for operatos
    let items = ['+', '-', 'x', '/']
    operatorId.textContent = items[randomRund(0, 4)]

    // for number
    zahlFirst.textContent = randomRund(0, 300)
    zahlSecond.textContent = randomRund(0, 300)

    // for '/'
    if (operatorId.textContent === '/') {
        while (true) {
            zahlSecond.textContent = randomRund(0, 100)
            if (zahlFirst.textContent % zahlSecond.textContent === 0) {
                break;
            }
        }
    }
}

// start
window.onload = () => {
    question()
}

// calculate

btn.addEventListener('click', () => {
    inputText.focus()
    
    // 
    if (!inputText.value) {
        return false
    }

    // 
    let result;
    let num1 = Number(zahlFirst.textContent)
    let num2 = Number(zahlSecond.textContent)

    switch (operatorId.textContent) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        default:
            break;
    }

    // 
    if (Number(inputText.value) === result) {
        outputTrue.innerHTML = Number(outputTrue.innerHTML) + 1
        inputText.value = ''
    } else {
        outputFalse.innerHTML = Number(outputFalse.innerHTML) + 1
        inputText.value = ''
    }

    // 
    question()

})


