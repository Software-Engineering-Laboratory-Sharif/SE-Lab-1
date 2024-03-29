const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

for (let button of buttons) {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue === "C") {
            clearResult();
        }else if (buttonValue === "DEL") {
            deleteOne();
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

function clearResult()
{
    result.innerText = "";
}

function deleteOne()
{
    result.innerText = result.innerText.slice(0, -1);
}