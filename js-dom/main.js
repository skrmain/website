console.log('JS-DOM');
const student = { name: 'Ram', course: 'Web' };

// const h1 = document.all[6];
// 1- Element Select
const headingElement = document.querySelector('h1');

// 2- Element Change
headingElement.innerHTML = 'Web Development';
headingElement.style.color = 'red';

const valueElement = document.querySelector('input');
const addButtonElement = document.querySelector('.addButton');
const unOrderListElement = document.querySelector('ul');
const removeButtons = document.querySelectorAll('.removeButton');

function addValue() {
  // console.log(valueElement.value);
  //   4- Element Create
  const liElement = document.createElement('li');
  const removeButton = document.createElement('button');

  removeButton.innerHTML = 'Remove';
  removeButton.addEventListener('click', removeValue);

  // console.log(removeButton);

  liElement.innerHTML = valueElement.value;
  liElement.append(removeButton);
  valueElement.value = '';

  unOrderListElement.append(liElement);
}

function removeValue(e) {
  // console.log(e);
  console.log('Remove Button Clicked');
  // removeButtons[0].parentElement.remove();
  // console.log(e.srcElement);
  e.srcElement.parentElement.remove();
}

// 3- Action
addButtonElement.addEventListener('click', addValue);

removeButtons.forEach(function (removeButton) {
  removeButton.addEventListener('click', removeValue);
});

// const removeButtonElement1 = document.querySelector('.removeButton1');
// const removeButtonElement2 = document.querySelector('.removeButton2');

// function removeValue2() {
//   console.log('Remove Button Clicked 2');
//   removeButtonElement2.parentElement.remove();
// }
// removeButtons[0].addEventListener('click', removeValue);
// removeButtons[1].addEventListener('click', removeValue);

const values = ['HTML', 'CSS'];
