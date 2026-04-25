/* Calculator (NO eval) */

let expression = "";

function press(val) {
    expression += val;
    document.getElementById("display").value = expression;
}

function calculate() {
    try {
        let result = Function("return " + expression)(); // safer than eval
        document.getElementById("display").value = result;
        expression = result.toString();
    } catch {
        alert("Invalid Expression");
    }
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}


/* Timer (COUNTDOWN + stopwatch) */

let time = 0;
let interval = null;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("time").innerText =
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

function startTimer() {
    let input = document.getElementById("inputTime").value;

    // If user enters value → countdown
    if (input && time === 0) {
        time = parseInt(input);
    }

    if (!interval) {
        interval = setInterval(() => {
            if (time > 0) {
                time--;
            } else {
                clearInterval(interval);
                interval = null;
                alert("Time's up!");
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    time = 0;
    updateDisplay();
}