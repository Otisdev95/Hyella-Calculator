//selector
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const keys = document.querySelectorAll("button");


//adding eventListener
keys.forEach(key=> {
    key.addEventListener("click", calculate);
})

function calculate() {
    let buttonText = this.innerText;
    if (buttonText==="CLEAR") {
        previousOperand.innerText = "";
        currentOperand.innerText = "o";
        currentOperand.style.animationFillMode = "";
        previousOperand.style.animationFillMode = "";
        return;
    }
    if(buttonText==="DEL") {
        previousOperand.textContent = previousOperand.textContent.substr(0,previousOperand.textContent.length-1);
        return;
    }
    if (buttonText==="=") {
        currentOperand.innerText = eval(previousOperand.innerText);
        currentOperand.style.animation = "big 0.5s ease-in-out";
        previousOperand.style.animation = "small 0.5s ease-in-out";
        currentOperand.style.animationFillMode = "forwards";
        previousOperand.style.animationFillMode = "forwards";
    }
    else {
        previousOperand.textContent += buttonText;
        return;
    }
}

