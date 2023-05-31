let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operation = document.getElementById("operation");
let btn = document.getElementById("resolver");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
    if (operation.value === "+") {
        resultado.innerHTML = `Resultado: ${parseInt(num1.value) + parseInt(num2.value)}`
    }
    if (operation.value === "-") {
        resultado.innerHTML = `Resultado: ${parseInt(num1.value) - parseInt(num2.value)}`
    }
    if (operation.value === ".") {
        resultado.innerHTML = `Resultado: ${parseInt(num1.value) * parseInt(num2.value)}`
    }
    if (operation.value === ":") {
        resultado.innerHTML = `Resultado: ${parseInt(num1.value) / parseInt(num2.value)}`
    }
})

