
const storageValue = () => {

    const inputText = document.getElementById('input-text');
    const inputTextValue = inputText.value;

    const inputValueId = document.getElementById('input-value');
    const inputValue = inputValueId.value;

    localStorage.setItem(inputTextValue, inputValue)

    inputText.value = '';
    inputValueId.value = '';

}

// Array set up in local Store

const arr = ['Abir', 'Khalid', 'Osman', 'farhan'];
const other = localStorage.setItem('name', JSON.stringify(arr))

// Object set up in local Store

const obj = {
    id: 1,
    name: 'Farhan',
    work: 'Developer'
}

const objStore = localStorage.setItem('obj', JSON.stringify(obj));
