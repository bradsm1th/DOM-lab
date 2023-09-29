console.log("Hello from the DOM lab!");

// Menu data structure (Task 3.0);
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// Task 1.0
const mainEl = document.querySelector('main');

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Tasks 1.3
mainEl.classList.add('flex-ctr');
// or
// mainEl.setAttribute('class', 'flex-ctr');



// Task 2.0
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1
topMenuEl.setAttribute('height', '100%');

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3
// topMenuEl.setAttribute('class', 'flex-around');
// or
topMenuEl.classList.add('flex-around');



// Task 3.1
menuLinks.forEach(menuItem => {
  let newEl = document.createElement('a');
  newEl.setAttribute('href', menuItem.href);
  newEl.innerText = menuItem.text;
  // newEl.textContent = menuItem.text;
  // newEl.innerHTML = menuItem.text;
  // console.log(newEl);
topMenuEl.append(newEl);
});



// Task 4.0
const subMenuEl = document.querySelector('#sub-menu');

// 4.1
// subMenuEl.style.height = '100%';
// OR
subMenuEl.style.setProperty('height', '100%');
// console.log(subMenuEl.getAttribute('height'));

// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// console.log(subMenuEl.getAttribute('style'));

// 4.3
subMenuEl.classList.add('flex-around');

// 4.4
subMenuEl.style.setProperty('position', 'absolute');

// running/temp console check
console.log(subMenuEl.style.position);