const categories = document.querySelector('#categories');
const categoriesItem = categories.children;

console.log('Number of categories: ', categoriesItem.length);

const list = document.querySelectorAll('.item');

list.forEach((item) => {

    const categoryNames = item.firstElementChild;
    const listItem = item.lastElementChild.children;
    
    console.log('Category: ', categoryNames.textContent);
    console.log('Elements: ', listItem.length);
})