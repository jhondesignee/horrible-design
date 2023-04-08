const firstNumber = document.querySelector("#firstNumber")
const secondNumber = document.querySelector("#secondNumber")
const showResult = document.querySelector("#showResult")
const result = document.querySelector("#result")

function sum() {
  result.textContent = firstNumber.value + secondNumber.value
}

showResult.addEventListener("click", sum)
