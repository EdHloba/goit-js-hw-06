function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

changeColorBtn.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();  
  span.textContent = body.style.backgroundColor;
}
