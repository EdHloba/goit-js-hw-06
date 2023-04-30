const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    const inputValue = event.currentTarget.value;
    event.currentTarget.classList.add('invalid');

    if (inputValue.length === 6) {

        event.currentTarget.classList.replace('invalid', 'valid');
    }
}