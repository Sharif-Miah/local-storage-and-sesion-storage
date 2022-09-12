
const storageValue = () => {

    const inputText = document.getElementById('input-text');
    const inputTextValue = inputText.value;

    const inputValueId = document.getElementById('input-value');
    const inputValue = inputValueId.value;

    localStorage.setItem(inputTextValue, inputValue)

    inputText.value = '';
    inputValueId.value = '';

}

