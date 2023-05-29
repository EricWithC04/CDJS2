let btn = document.getElementById("changeColor");
let txt = document.getElementById("textColor");
let colorChanged = false;

btn.addEventListener("click", ()=>{
    if (colorChanged) {
        txt.classList.toggle("orange")
    } else {
        txt.classList.add("orange");
    }
    colorChanged = !colorChanged;
})