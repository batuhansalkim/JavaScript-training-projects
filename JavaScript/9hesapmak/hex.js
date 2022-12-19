const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener("click",function(e){
    const element = e.target;

    if(!element.matches("button")) return;

    if(element.classList.contains("operator")){
        console.log("operator ",element.value);
        return;
    }
    console.log("number",element.value);
})
















