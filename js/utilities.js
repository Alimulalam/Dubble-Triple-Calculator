function getInputValue(inputId) {
    const inputIdValue = document.getElementById(inputId);
    const inputIdValueTotal = parseFloat(inputIdValue.value);
    inputIdValue.value = '';
    return inputIdValueTotal;
}

function getTextValueById(textId) {
    const textIdValue = document.getElementById(textId);
    const textIdValueTotal = parseFloat(elementIdValue.innerText);
    return textIdValueTotal;
}

function setValueById(textId, value) {
    const setTextvalue = document.getElementById(textId);
    setTextvalue.innerText = value;
}

