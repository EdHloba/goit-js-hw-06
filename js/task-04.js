const makeCounter = {
    counterValue: 0,

    increment() {
    this.counterValue += 1;
    },

    decrement() {
    this.counterValue -= 1;
    },
}


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


decrementBtn.addEventListener('click', function () {
    makeCounter.decrement();
    valueEl.textContent = makeCounter.counterValue;
});

incrementBtn.addEventListener('click', function () {
    makeCounter.increment();
    valueEl.textContent = makeCounter.counterValue;
});