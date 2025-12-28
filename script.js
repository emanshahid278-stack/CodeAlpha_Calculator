let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function squareRoot() {
    try {
        display.value = Math.sqrt(display.value);
    } catch {
        display.value = "Error";
    }
}

function square() {
    try {
        display.value = Math.pow(display.value, 2);
    } catch {
        display.value = "Error";
    }
}

let advancedMode = false;

function toggleMode() {
    const basicOps = document.querySelectorAll(".basic");
    const advancedOps = document.querySelectorAll(".advanced");
    const toggleBtn = document.querySelector(".toggle-btn");

    if (!advancedMode) {
        basicOps.forEach(btn => btn.style.display = "none");
        advancedOps.forEach(btn => btn.style.display = "block");
        toggleBtn.innerText = "Back";
        advancedMode = true;
    } else {
        advancedOps.forEach(btn => btn.style.display = "none");
        basicOps.forEach(btn => btn.style.display = "block");
        toggleBtn.innerText = "More";
        advancedMode = false;
    }
}

