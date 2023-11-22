console.log('JS-DOM');

const student = { name: 'Ram', course: 'Web' };

// const h1 = document.all[6];
// 1- Element Select
const headingElement = document.querySelector('h1');

// 2- Element Change
headingElement.innerHTML = 'Web Development';
headingElement.style.color = 'red';

const valueElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const unOrderListElement = document.querySelector('ul');

function addValue() {
  // console.log(valueElement.value);
  //   4- Element Create
  const liElement = document.createElement('li');
  liElement.innerHTML = valueElement.value;
  valueElement.value = '';

  unOrderListElement.append(liElement);
}

// 3- Action
buttonElement.addEventListener('click', addValue);
