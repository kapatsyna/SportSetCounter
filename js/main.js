let counterNumber = document.querySelector('.counter__number');
let addBtn = document.querySelector('.counter__add');
let removeBtn = document.querySelector('.counter__remove');
let clearBtn = document.querySelector('.counter__clear');
let number = 0;
function showResult() {
    counterNumber.innerHTML = number;
}
addBtn.addEventListener('click', () => {
    number++;
    showResult();
})
removeBtn.addEventListener('click', () => {
    number--;
    showResult();
    if (number <= 0) {
        number = 0;
        showResult();
    }
})
clearBtn.addEventListener('click', () => {
    number = 0;
    showResult();
})