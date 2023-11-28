console.log('JS-DOM');
const student = { name: 'Ram', course: 'Web' };

// const h1 = document.all[6];
// 1- Element Select
const headingElement = document.querySelector('h1');

// 2- Element Change
headingElement.innerHTML = 'Web Development';
headingElement.style.color = 'red';
