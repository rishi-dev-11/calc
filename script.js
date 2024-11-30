function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
        display.value = 'Error';
    }
}