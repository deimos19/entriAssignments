let display = document.getElementById("display");

function clearDisplay(){
    display.value = "";
}

function operation(value){
    display.value += value;
}
function calculateSquare(){
    num = Number(display.value)
    display.value = num * num
}
function calculateCube(){
    num = Number(display.value)
    display.value = num * num * num
}
function calculate(value){
    display.value = eval(display.value);
}