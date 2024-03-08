const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

for (let button of buttons) {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue === "C") {
            //TODO
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function calculateResult()
{
    result.innerText = eval(result.innerText);
}

function appendValue(buttonValue) {
    result.innerText += buttonValue;
}